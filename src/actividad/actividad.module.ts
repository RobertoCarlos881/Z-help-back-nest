import { Module } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { ActividadController } from './actividad.controller';
import { ActualizarService } from './services/actualizar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad, ActividadCercana, Usuarios } from 'src/entities';

@Module({
  controllers: [ActividadController],
  providers: [ActividadService, ActualizarService],
  imports: [TypeOrmModule.forFeature([Actividad, Usuarios, ActividadCercana])]
})
export class ActividadModule {}
