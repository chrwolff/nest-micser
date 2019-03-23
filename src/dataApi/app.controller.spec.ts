import { Test, TestingModule } from '@nestjs/testing';
import { DataApiController } from './dataApi.controller';
import { DataApiService } from './dataApi.service';

describe('AppController', () => {
  let appController: DataApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataApiController],
      providers: [DataApiService],
    }).compile();

    appController = app.get<DataApiController>(DataApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.createMovie().toBe('Hello World!');
    });
  });
});
