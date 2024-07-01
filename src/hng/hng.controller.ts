import { Controller, Get, Query, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { HngService } from './hng.service';

@Controller('api')
export class HngController {
    constructor(
        private readonly HngService: HngService,
    ) { }

    @Get('hello')
    async getVisitor(@Query('visitor_name') name: string,
        @Res() response: Response,
        @Request() req: any,) {
        try {
            const clientIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
            const locationData = await this.HngService.getLocationFromIp(clientIp);
            if (!locationData) {
                throw new Error('Unable to get location data');
            }
            const tempData = await this.HngService.getTemparatureFromLocation(locationData[1], locationData[2]);

            response.status(200).json({
                client_ip: clientIp,
                location: locationData[0],
                greeting: `Hello, ${name}!, the temperature is ${tempData} degrees Celcius in ${locationData[0]}`
            });
        } catch (error) {
            response.status(500).json({
                message: 'An error occurred',
                error: error.message,
                ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress
            });
        }
    }
}