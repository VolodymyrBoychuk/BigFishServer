import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateFishingSpotDto } from './create-fishing-spot.dto';
import { Season } from '../entities/fishing-spot.entity';

export class UpdateFishingSpotDto extends PartialType(CreateFishingSpotDto) {
  @ApiProperty({ description: 'Fishing spot name', required: false })
  name?: string;

  @ApiProperty({ description: 'Location of the fishing spot', required: false })
  location?: string;

  @ApiProperty({
    description: 'Type of water body (lake, river, etc.)',
    required: false,
  })
  type?: string;

  @ApiProperty({
    description: 'Fish species found at this spot',
    required: false,
  })
  fishSpecies?: string;

  @ApiProperty({ description: 'Is access paid or free?', required: false })
  isPaid?: boolean;

  @ApiProperty({ description: 'Additional description', required: false })
  description?: string;

  @ApiProperty({
    description: 'Seasonality of the spot',
    enum: Season,
    required: false,
  })
  seasonality?: Season;
}
