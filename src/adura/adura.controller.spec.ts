import { Test, TestingModule } from '@nestjs/testing';
import { AduraController } from './adura.controller';
import { AduraService } from './adura.service';

describe('AduraController', () => {
  let controller: AduraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AduraController],
      providers: [AduraService],
    }).compile();

    controller = module.get<AduraController>(AduraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
