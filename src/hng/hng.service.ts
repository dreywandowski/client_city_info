import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class HngService {
    constructor(private configService: ConfigService) { }

    locationKey(): string {
        return this.configService.get<string>('GEO_KEY');
    }

    weatherKey(): string {
        return this.configService.get<string>('TEMP_KEY');
    }

    async getLocationFromIp(ip: string): Promise<any> {
        try {
            const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.locationKey()}& ip=${ip}`);
            let info: string[] = [response.data.city,
            response.data.latitude.toString(),
            response.data.longitude.toString()
            ];
            return info;
        } catch (error) {
            throw new Error('Unable to fetch location data ' + error.message);
        }
    }

    async getTemparatureFromLocation(lat: string, long: string): Promise<string> {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {
                q: `${lat},${long}`
            },
            headers: {
                'x-rapidapi-key': `${this.weatherKey()}`,
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            let temp = response.data.current.temp_c;
            return temp;
        } catch (error) {
            throw new Error('Unable to fetch temparature data ' + error.message);
        }
    }
}
