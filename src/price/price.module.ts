import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { TickerBackgroundService } from './ticker-background/ticker-background.service';

@Module({
  providers: [PriceService, TickerBackgroundService],
  controllers: [PriceController],
})
export class PriceModule {}
