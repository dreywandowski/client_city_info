// hng.controller.spec.ts
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HngController } from './hng.controller';
import { HngService } from './hng.service';

describe('HngController', () => {
  let controller: HngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HngController],
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

    controller = module.get<HngController>(HngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
