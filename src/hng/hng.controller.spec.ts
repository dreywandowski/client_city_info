import { Test, TestingModule } from '@nestjs/testing';
import { HngController } from './hng.controller';

describe('HngController', () => {
  let controller: HngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HngController],
    }).compile();

    controller = module.get<HngController>(HngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
