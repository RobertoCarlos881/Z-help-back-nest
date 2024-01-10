import { Module } from '@nestjs/common';
import { ForoService } from './foro.service';
import { ForoController } from './foro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion, PublicacionesGuardadas, RespuestaPublicacion, Usuarios } from 'src/entities/index';

@Module({
  controllers: [ForoController],
  providers: [ForoService],
  imports: [TypeOrmModule.forFeature([Usuarios, Publicacion, PublicacionesGuardadas, RespuestaPublicacion])]
})
export class ForoModule {}
