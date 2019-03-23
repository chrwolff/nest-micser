import { Module } from '@nestjs/common';
import { DataStewardController } from './dataSteward.controller';
import { DataStewardPersistenceService } from './dataStewardPersistence.service';

@Module({
  imports: [],
  controllers: [DataStewardController],
  providers: [DataStewardPersistenceService],
})
export class DataSteward {}
