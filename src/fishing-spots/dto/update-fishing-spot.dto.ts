import { PartialType } from '@nestjs/mapped-types';
import { CreateFishingSpotDto } from './create-fishing-spot.dto';

export class UpdateFishingSpotDto extends PartialType(CreateFishingSpotDto) {}

// export class UpdateFishingSpotDto {
//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsOptional()
//   @IsString()
//   location?: string;

//   @IsOptional()
//   @IsString()
//   type?: string;

//   @IsOptional()
//   @IsString()
//   fishSpecies?: string;

//   @IsOptional()
//   @IsBoolean()
//   isPaid?: boolean;

//   @IsOptional()
//   @IsString()
//   description?: string;

//   @IsOptional()
//   @IsEnum(Season)
//   seasonality?: Season;
// }
