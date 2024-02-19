import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceModule } from './price/price.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PriceModule],
})
export class AppModule {}
