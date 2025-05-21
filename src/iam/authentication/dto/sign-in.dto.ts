/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'User email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'securepassword',
    description: 'User password',
    minLength: 10,
  })
  @MinLength(10)
  password: string;
}
