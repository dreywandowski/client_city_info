import { Test, TestingModule } from '@nestjs/testing';
import { AduraService } from './adura.service';

describe('AduraService', () => {
  let service: AduraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AduraService],
    }).compile();

    service = module.get<AduraService>(AduraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
