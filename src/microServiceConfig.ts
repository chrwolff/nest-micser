import { Transport, RmqOptions } from '@nestjs/microservices';

export const MicroServiceConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [`amqp://localhost:5672`],
    queue: 'movie_queue',
    queueOptions: { durable: false },
  },
};

export const MESSAGE_SERVICE = 'MessageService';
