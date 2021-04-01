import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue} from 'bull';
import * as fs from 'fs';
import * as csv from 'fast-csv';
// import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {

    constructor(@InjectQueue('readData') private readDataQueue: Queue){}

    async readDataFile(job:Express.Multer.File){


    }

    getHello(): string {
        return 'Hello World!';
      }
}
