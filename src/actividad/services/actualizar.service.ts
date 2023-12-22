import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividad } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ActualizarService {
  constructor(
    @InjectRepository(Actividad)
    private readonly actividadRepository: Repository<Actividad>,
  ) {}

  async actualizarAccionDespuesDeTiempo(): Promise<void> {
    const tiempoLimiteMinutos = 15;
    const ahora = new Date();
    ahora.setMinutes(ahora.getMinutes() - tiempoLimiteMinutos);

    await this.actividadRepository
      .createQueryBuilder()
      .update(Actividad)
      .set({ accion: false })
      .where('accion = :accion AND created_at < :fechaLimite', { accion: true, fechaLimite: ahora })
      .execute();
  }
}