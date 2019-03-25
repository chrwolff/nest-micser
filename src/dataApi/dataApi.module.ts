import { Module } from '@nestjs/common';
import { DataApiController } from './dataApi.controller';
import { ClientsModule } from '@nestjs/microservices';
import { MicroServiceConfig, MESSAGE_SERVICE } from '../microServiceConfig';

@Module({
  imports: [
    ClientsModule.register([{ name: MESSAGE_SERVICE, ...MicroServiceConfig }]),
  ],
  controllers: [DataApiController],
  providers: [],
})
export class DataApi {}
