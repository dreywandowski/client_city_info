// hng.service.spec.ts
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HngService } from './hng.service';

describe('HngService', () => {
  let service: HngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HngService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              switch (key) {
                case 'GEO_KEY':
                  return 'mockGeoKey';
                case 'TEMP_KEY':
                  return 'mockTempKey';
                default:
                  return null;
              }
            }),
          },
        },
      ],
    }).compile();

    service = module.get<HngService>(HngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
