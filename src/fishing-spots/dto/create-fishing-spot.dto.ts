import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Season } from '../entities/fishing-spot.entity';

export class CreateFishingSpotDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Назва місця риболовлі

  @IsString()
  @IsNotEmpty()
  location: string; // Локація водойми

  @IsString()
  @IsNotEmpty()
  type: string; // Тип водойми (озеро, річка)

  @IsString()
  @IsNotEmpty()
  fishSpecies: string; // Види риби

  @IsBoolean()
  isPaid: boolean; // Чи платний доступ

  @IsOptional()
  @IsString()
  description?: string; // Опис

  @IsEnum(Season)
  seasonality: Season; // Сезонність
}
