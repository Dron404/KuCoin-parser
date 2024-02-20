import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { PriceService } from './price.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetPairHistoryQueryDto } from './dto/get-pair-history-query.dto';

@ApiTags('Price')
@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get('/all')
  @ApiOperation({
    description: 'get the latest price data for all cryptocurrency pairs.',
  })
  async getAllPairData() {
    return await this.priceService.getAllPairData();
  }

  @Get('/:symbol')
  @ApiOperation({
    description:
      'get the history of price changes for a specific cryptocurrency pair by symbol for a period.',
  })
  @ApiQuery({
    name: 'start',
    description: 'period start',
    example: new Date(new Date().getTime() - 30 * 60000).toISOString(),
  })
  @ApiQuery({
    name: 'end',
    description: 'period end',
    example: new Date().toISOString(),
  })
  @ApiParam({ name: 'symbol', example: 'BTC-USDT' })
  async getPairBySymbol(
    @Param('symbol') symbol: string,
    @Query() query: GetPairHistoryQueryDto,
  ) {
    if (new Date(query.start) > new Date(query.end)) {
      throw new BadRequestException('Invalid time interval');
    }
    return await this.priceService.getPairBySymbol({ symbol, query });
  }
}
