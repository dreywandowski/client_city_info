import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HngController } from './hng.controller';
import { HngService } from './hng.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HngController],
  providers: [HngService]
})
export class HngModule { }
