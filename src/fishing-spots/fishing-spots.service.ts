import { Injectable } from '@nestjs/common';
import { CreateFishingSpotDto } from './dto/create-fishing-spot.dto';
import { UpdateFishingSpotDto } from './dto/update-fishing-spot.dto';

@Injectable()
export class FishingSpotsService {
  create(createFishingSpotDto: CreateFishingSpotDto) {
    return 'This action adds a new fishingSpot';
  }

  findAll() {
    return `This action returns all fishingSpots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fishingSpot`;
  }

  update(id: number, updateFishingSpotDto: UpdateFishingSpotDto) {
    return `This action updates a #${id} fishingSpot`;
  }

  remove(id: number) {
    return `This action removes a #${id} fishingSpot`;
  }
}
