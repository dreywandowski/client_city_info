import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HngController } from './hng.controller';
import { HngModule } from './hng.module';
import { HngService } from './hng.service';

describe('HngService', () => {
  let service: HngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HngModule],
    }).compile();

    service = module.get<HngService>(HngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('HngController', () => {
  let controller: HngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HngModule],
    }).compile();

    controller = module.get<HngController>(HngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
