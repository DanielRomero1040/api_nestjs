import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';


@Module({
  imports: [UsersModule, PassportModule,ConfigModule.forRoot({isGlobal:true,}),JwtModule.register({
    secret: process.env.SESSIONSECRET, // llevar a las variables de entorno
    signOptions:{expiresIn:process.env.SESSIONTIME},
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
