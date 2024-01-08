import { Module } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { ActividadController } from './actividad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad, ActividadCercana, Usuarios } from 'src/entities';
import { ActivityCronJob } from './cron.service';

@Module({
  controllers: [ActividadController],
  providers: [ActividadService, ActivityCronJob],
  imports: [TypeOrmModule.forFeature([Actividad, Usuarios, ActividadCercana])]
})
export class ActividadModule {
}
