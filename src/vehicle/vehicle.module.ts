import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { VehicleProcessor } from './vehicle-processor';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Module({
  imports:[
    BullModule.registerQueue({
      name: 'readData'
  }),
  MulterModule.register({
      dest: '../data'
  }),
  ],
  controllers: [VehicleController],
  providers: [VehicleService,VehicleProcessor]
})
export class VehicleModule {}
