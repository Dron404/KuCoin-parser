import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PriceModule } from './price/price.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, PriceModule, ScheduleModule.forRoot()],
})
export class AppModule {}
