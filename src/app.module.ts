import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HngModule } from './hng/hng.module';
import { AduraModule } from './adura/adura.module';

@Module({
  imports: [HngModule, AduraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
