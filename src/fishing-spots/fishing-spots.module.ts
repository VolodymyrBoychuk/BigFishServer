import { Module } from '@nestjs/common';
import { FishingSpotsService } from './fishing-spots.service';
import { FishingSpotsController } from './fishing-spots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishingSpot } from './entities/fishing-spot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FishingSpot])],
  controllers: [FishingSpotsController],
  providers: [FishingSpotsService],
})
export class FishingSpotsModule {}
