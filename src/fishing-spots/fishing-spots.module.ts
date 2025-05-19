import { Module } from '@nestjs/common';
import { FishingSpotsService } from './fishing-spots.service';
import { FishingSpotsController } from './fishing-spots.controller';

@Module({
  controllers: [FishingSpotsController],
  providers: [FishingSpotsService],
})
export class FishingSpotsModule {}
