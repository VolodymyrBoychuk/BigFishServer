import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Season {
  SPRING_SUMMER = 'Spring-Summer',
  WINTER = 'Winter',
  YEAR_ROUND = 'Year-Round',
}

@Entity()
export class FishingSpot {
  @ApiProperty({ description: 'Unique identifier for the fishing spot' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Fishing spot name', uniqueItems: true })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ description: 'Location (coordinates or region)' })
  @Column()
  location: string;

  @ApiProperty({ description: 'Type of water body (river, lake, sea)' })
  @Column()
  type: string;

  @ApiProperty({ description: 'Fish species found at this spot' })
  @Column()
  fishSpecies: string;

  @ApiProperty({
    description: 'Whether access requires payment',
    default: false,
  })
  @Column({ default: false })
  isPaid: boolean;

  @ApiProperty({ description: 'Additional details', required: false })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({ description: 'Seasonality of the fishing spot', enum: Season })
  @Column({ type: 'enum', enum: Season })
  seasonality: Season;
}
