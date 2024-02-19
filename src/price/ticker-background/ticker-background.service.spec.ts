import { Test, TestingModule } from '@nestjs/testing';
import { TickerBackgroundService } from './ticker-background.service';

describe('TickerBackgroundService', () => {
  let service: TickerBackgroundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickerBackgroundService],
    }).compile();

    service = module.get<TickerBackgroundService>(TickerBackgroundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
