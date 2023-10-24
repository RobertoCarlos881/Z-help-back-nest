import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: {expiresIn: '8760h'}
    })
  ]
})
export class AuthModule {}
