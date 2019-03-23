import { Module } from '@nestjs/common';
import { DataApiController } from './dataApi.controller';
import { DataApiService } from './dataApi.service';

@Module({
  imports: [],
  controllers: [DataApiController],
  providers: [DataApiService],
})
export class AppModule {}
