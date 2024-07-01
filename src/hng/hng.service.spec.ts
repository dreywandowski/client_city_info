import { Test, TestingModule } from '@nestjs/testing';
import { HngService } from './hng.service';

describe('HngService', () => {
  let service: HngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HngService],
    }).compile();

    service = module.get<HngService>(HngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
