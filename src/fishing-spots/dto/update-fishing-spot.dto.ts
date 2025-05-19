import { PartialType } from '@nestjs/mapped-types';
import { CreateFishingSpotDto } from './create-fishing-spot.dto';

export class UpdateFishingSpotDto extends PartialType(CreateFishingSpotDto) {}
