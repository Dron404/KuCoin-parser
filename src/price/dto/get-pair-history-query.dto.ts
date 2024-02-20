import { IsISO8601 } from 'class-validator';

export class GetPairHistoryQueryDto {
  @IsISO8601({ strict: true })
  start: string;

  @IsISO8601({ strict: true })
  end: string;
}
