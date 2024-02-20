import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Prisma } from '@prisma/client';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { TickerData } from './types';

@Injectable()
export class TickerBackgroundService {
  constructor(private prisma: PrismaService) {}

  //@Cron(CronExpression.EVERY_MINUTE)
  //async tickerBackground() {
  //  await this.saveCoinsPairPrice();
  //}

  async getCoinsPair(): Promise<TickerData | null> {
    try {
      const response = await axios.get(
        'https://api.kucoin.com/api/v1/market/allTickers',
      );
      return response.status === 200 ? response.data.data : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async saveCoinsPairPrice() {
    const priceData = await this.getCoinsPair();
    if (!priceData) {
      return;
    }
    const data: Prisma.CoinsPairCreateInput[] = priceData.ticker.map(
      (ticker) => {
        const { symbol, last } = ticker;
        return {
          symbol,
          lastPrice: last,
          createdAt: new Date(priceData.time),
        };
      },
    );
    await this.prisma.coinsPair.createMany({ data });
  }
}
