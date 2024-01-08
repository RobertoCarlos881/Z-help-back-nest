import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Actividad, ActividadCercana, Contactos, Instituciones, Publicacion, PublicacionesGuardadas, RespuestaPublicacion, Usuarios } from './entities/index';
import { JwtModule } from '@nestjs/jwt';
import { ForoModule } from './foro/foro.module';
import { ContactosModule } from './contactos/contactos.module';
import { LocalizacionModule } from './localizacion/localizacion.module';
import { PerfilModule } from './perfil/perfil.module';
import { ActividadModule } from './actividad/actividad.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
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

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '8760h'}
    }),

    AuthModule,
    ForoModule,
    ContactosModule,
    LocalizacionModule,
    PerfilModule,
    ActividadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
