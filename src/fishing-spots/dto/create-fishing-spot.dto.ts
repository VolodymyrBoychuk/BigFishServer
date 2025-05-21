import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Season } from '../entities/fishing-spot.entity';

export class CreateFishingSpotDto {
  @ApiProperty({ description: 'Fishing spot name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Location of the fishing spot' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ description: 'Type of water body (lake, river, etc.)' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ description: 'Fish species found at this spot' })
  @IsString()
  @IsNotEmpty()
  fishSpecies: string;

  @ApiProperty({ description: 'Is access paid or free?' })
  @IsBoolean()
  isPaid: boolean;

  @ApiProperty({ description: 'Additional description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Seasonality of the spot', enum: Season })
  @IsEnum(Season)
  seasonality: Season;
}
