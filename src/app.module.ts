import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Actividad, ActividadCercana, Contactos, Instituciones, Publicacion, PublicacionesGuardadas, RespuestaPublicacion, Usuarios } from './entities/index';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DIALEG_DATABASE as any,
      host: process.env.HOST_DATABASE,
      port: parseInt(process.env.PORT_DATABASE, 10),
      username: process.env.USERNAME_DATABASE,
      password: process.env.PASSWORD_DATABASE,
      database: process.env.NAME_DATABASE,
      entities: [Usuarios, RespuestaPublicacion, Publicacion, PublicacionesGuardadas, Instituciones, Contactos, Actividad, ActividadCercana],
      synchronize: true,
    }),

    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
