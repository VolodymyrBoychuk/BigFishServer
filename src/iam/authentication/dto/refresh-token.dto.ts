import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({ description: 'Access renewal token' })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
