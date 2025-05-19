import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';

@Auth(AuthType.None)
@Controller('authentication')
export class AuthenticationController {
  // Example function for authentication controller
  // You can add your own logic as needed

  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    return this.authService.signUp(signUpDto);
  }
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<any> {
    return this.authService.signIn(signInDto);
  }
  @Get('status')
  getStatus(): string {
    return 'Authentication service is running';
  }
}
