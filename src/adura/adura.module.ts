import { Module } from '@nestjs/common';
import { AduraService } from './adura.service';
import { AduraController } from './adura.controller';

@Module({
  controllers: [AduraController],
  providers: [AduraService],
})
export class AduraModule {}
