import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { INestApplication } from '@nestjs/common';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return 200 and Object', () => {
      return request(appController.getHello())
      .get('/')
      .expect(200)
      .expect({
        message: 'Something',
      });
    });
  });
});
