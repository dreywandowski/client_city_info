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

    weatherApiKey(): string {
        return this.configService.get<string>('WEATHER_API_KEY');
    }

    async ipifyResponse(): Promise<string> {
        let ipp = await axios.get('https://api.ipify.org?format=json');
        return ipp.data.ip;
    }


    async getLocationFromIp(ip: string): Promise<any> {
        try {
            const response = await axios.get(`https://ipapi.co/${ip}/json`);
            if (!response.data.error) {
                let info: string[] = [response.data.city,
                response.data.latitude,
                response.data.longitude
                ];
                return info;
            }
            else {
                return false;
            }
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