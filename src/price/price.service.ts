import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPairHistoryQueryDto } from './dto/get-pair-history-query.dto';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async getAllPairData() {
    return this.prisma.coinsPair.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async getPairBySymbol(args: {
    symbol: string;
    query: GetPairHistoryQueryDto;
  }) {
    const { symbol, query } = args;
    return await this.prisma.coinsPair.findMany({
      where: {
        symbol: { equals: symbol },
        AND: [
          { symbol: { equals: symbol } },
          {
            createdAt: { lte: new Date(query.end), gte: new Date(query.start) },
          },
        ],
      },
      select: { symbol: true, lastPrice: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
