import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './dataApi/app.module';
import { DataSteward } from './dataSteward/dataSteward.module';

async function bootstrap() {
  const service = await NestFactory.createMicroservice(DataSteward, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://localhost:5672`],
      queue: 'movie_queue',
      queueOptions: { durable: false },
    },
  });
  service.listen(() => console.log('DataSteward is running.'));

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
