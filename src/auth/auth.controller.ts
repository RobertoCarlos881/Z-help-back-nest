import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthGuard } from './guards/auth.guard';
import { LoginResponse } from './interfaces/login-response.interface';
import { Usuarios } from 'src/entities';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req: Request) {
    const user = req['user'];
    return user;
  }

  @UseGuards(AuthGuard)
  @Get('/check-token')
  checkToken(@Request() req: Request): LoginResponse {
    const user = req['user'] as Usuarios;
    return {
      user,
      token: this.authService.getJwt({id: user.id_usuario})
    }
  }
}
