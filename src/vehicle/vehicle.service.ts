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
        console.log("vehicle service");
        const vehicleDetail=[];
        console.log(job.path);

        //     fs.createReadStream(job.path)
        //     .pipe(csv.parse({}))
        //     .on('data',function(data)->{
        //         console.log(data);
        //     })
        //     .on('end',function(data){
        //     console.log("Finished");
        // })
    
            fs.createReadStream(job.path)
            .pipe(csv.parse({}))
            .on('data',(data) => vehicleDetail.push(data))
            .on('end',()=>{
                vehicleDetail.shift();
                console.log(vehicleDetail);
            });

            // const Pool = require("pg").Pool;
            // const pool=new Pool ({
            //     host: "localhost",
            //     user: "postgres",
            //     database: "vehicle_database",
            //     password: "postgres",
            //     port: 5432
            //   });

            //   const query =
            //   "INSERT INTO"+this.vehicleEntity+"(id, first_name, last_name, car_make,car_model,vin_number,manufactured_date) VALUES ($1, $2, $3, $4)";
        



            //   pool.connect((err, client, done) => {
            //     if (err) throw err;
          
            //     try {
            //       vehicleDetail.forEach(row => {
            //         client.query(query, row, (err, res) => {
            //           if (err) {
            //             console.log(err.stack);
            //           } else {
            //             console.log("inserted " + res.rowCount + " row:", row);
            //           }
            //         });
            //       });
            //     } finally {
            //       done();
            //     }
            //   });

    }

    getHello(): string {
        return 'Hello World!';
      }
}
