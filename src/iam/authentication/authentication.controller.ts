import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Auth(AuthType.None)
@ApiTags('Auth')
@Controller('authentication')
export class AuthenticationController {
  // Example function for authentication controller
  // You can add your own logic as needed

  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'Реєстрація нового користувача' })
  @ApiBody({ type: SignUpDto }) // Вказує структуру тіла запиту
  async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    return this.authService.signUp(signUpDto);
  }

  //@ApiBearerAuth() // Вказує, що потрібен токен
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Авторизація користувача' })
  @ApiBody({ type: SignInDto }) // Вказує структуру тіла запиту
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<any> {
    return this.authService.signIn(signInDto);
  }
  @Get('status')
  getStatus(): string {
    return 'Authentication service is running';
  }
}
