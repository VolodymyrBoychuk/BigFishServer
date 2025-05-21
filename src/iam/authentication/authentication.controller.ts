import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Auth(AuthType.None)
@ApiTags('Auth')
@Controller('authentication')
export class AuthenticationController {
  // Example function for authentication controller
  // You can add your own logic as needed

  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'Registration of a new user' })
  @ApiBody({ type: SignUpDto }) // Specifies the request body structure
  async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    return this.authService.signUp(signUpDto);
  }

  //@ApiBearerAuth() // Indicates that a token is required
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User authorization' })
  @ApiBody({
    description: 'User login details',
    type: SignInDto,
    examples: {
      example1: {
        summary: 'Login example',
        value: {
          email: 'user@example.com',
          password: 'strongPassword123',
        },
      },
    },
  })
  //@ApiBody({ type: SignInDto }) // Specifies the request body structure
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid login or password',
  })
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<any> {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Token successfully refreshed',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid request',
  })
  @Post('refresh-tokens')
  async refreahTokens(@Body() refreshTokenDto: RefreshTokenDto): Promise<any> {
    return this.authService.refreahTokens(refreshTokenDto);
  }

  @Get('status')
  @ApiOperation({ summary: 'Check authentication service status' })
  @ApiResponse({
    status: 200,
    description: 'Service is running',
    schema: {
      example: 'Authentication service is running',
    },
  })
  @HttpCode(HttpStatus.OK)
  getStatus(): string {
    return 'Authentication service is running';
  }
}
