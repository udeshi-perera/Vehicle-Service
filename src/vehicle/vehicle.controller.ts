import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Queue} from 'bull'
import { FileInterceptor } from '@nestjs/platform-express';
import { Express} from 'express'

@Controller('vehicle')
export class VehicleController {

    constructor(private vehicleService:VehicleService,@InjectQueue('readData') private readData: Queue){}

    @Post('csvFile')
    @UseInterceptors(FileInterceptor('csvFile'))
    async readDataFile(@UploadedFile() csvFile: Express.Multer.File){
        console.log("HEllo");
        await this.readData.add('transcode',{
            csvFile: csvFile
        });
    }

    @Get()
    getHello(): string {
      return this.vehicleService.getHello();
    }
}
