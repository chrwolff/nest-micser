import { NestFactory } from '@nestjs/core';
import { MicroServiceConfig } from './microServiceConfig';
import { DataApi } from './dataApi/dataApi.module';
import { DataSteward } from './dataSteward/dataSteward.module';

(async function bootstrap() {
  const dataSteward = await NestFactory.createMicroservice(
    DataSteward,
    MicroServiceConfig,
  );
  await dataSteward.listenAsync();

  const dataApi = await NestFactory.create(DataApi);
  let dataApiService = dataApi.connectMicroservice(MicroServiceConfig);
  await dataApiService.listenAsync();
  await dataApi.listen(3000);
})();
