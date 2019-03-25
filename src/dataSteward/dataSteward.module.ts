import { Module } from '@nestjs/common';
import { DataStewardController } from './dataSteward.controller';
import { DataStewardPersistenceService } from './dataStewardPersistence.service';
import { ClientsModule } from '@nestjs/microservices';
import { MicroServiceConfig, MESSAGE_SERVICE } from 'src/microServiceConfig';

@Module({
  imports: [
    ClientsModule.register([{ name: MESSAGE_SERVICE, ...MicroServiceConfig }]),
  ],
  controllers: [DataStewardController],
  providers: [DataStewardPersistenceService],
})
export class DataSteward {}
