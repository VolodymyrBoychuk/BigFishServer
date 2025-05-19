import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FishingSpot } from './entities/fishing-spot.entity';
import { CreateFishingSpotDto } from './dto/create-fishing-spot.dto';
import { UpdateFishingSpotDto } from './dto/update-fishing-spot.dto';

@Injectable()
export class FishingSpotsService {
  constructor(
    @InjectRepository(FishingSpot)
    private fishingSpotsRepository: Repository<FishingSpot>,
  ) {}

  async create(
    createFishingSpotDto: CreateFishingSpotDto,
  ): Promise<FishingSpot> {
    const fishingSpot =
      this.fishingSpotsRepository.create(createFishingSpotDto);
    return this.fishingSpotsRepository.save(fishingSpot);
  }

  async findAll(): Promise<FishingSpot[]> {
    return this.fishingSpotsRepository.find();
  }

  async findOne(id: number): Promise<FishingSpot | null> {
    return this.fishingSpotsRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateFishingSpotDto: UpdateFishingSpotDto,
  ): Promise<FishingSpot | null> {
    await this.fishingSpotsRepository.update(id, updateFishingSpotDto);
    return this.fishingSpotsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.fishingSpotsRepository.delete(id);
  }
}
