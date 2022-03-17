import { Controller, Get, Post, UseGuards,Request, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  
  // @Get()
  // @Render('index')
  // root() {
  //   return { message: 'Hello world!' };
  // }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any{
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

}
