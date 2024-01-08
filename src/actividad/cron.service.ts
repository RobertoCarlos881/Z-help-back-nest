import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividad } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityCronJob {
    private readonly logger = new Logger(ActivityCronJob.name);
    constructor(
        @InjectRepository(Actividad)
        private readonly actividadRepository: Repository<Actividad>
    ) { }

    @Cron(CronExpression.EVERY_MINUTE)
    public async execute() {
        console.log("Me estoy ejecutando");
        const activities = await this.actividadRepository.find({
            where: {
                activo: true,
            },
        });

        if (activities.length > 0) {
            const now = new Date();

            activities.forEach(async (activity) => {
                const fechaYHoraString = activity.created_at;
                console.log(fechaYHoraString);
                const fechaYHora = new Date(fechaYHoraString);

                // Obtener la hora, minutos y segundos
                const horas = fechaYHora.getHours();
                const minutos = fechaYHora.getMinutes();
                const segundos = fechaYHora.getSeconds();
                const horaFormateada = `${horas}:${minutos}:${segundos}`;
                console.log(horaFormateada);
                console.log(now);
                
                

                // Calcular la diferencia de tiempo en minutos
                //const timeDiff = Math.abs(now.getHours() - Number(createdAtString.split(':')[0]));
                //console.log(timeDiff);


                // if (timeDiff > 15) {
                //     // Si ha pasado más de 15 minutos, actualiza la propiedad activo a false
                //     activity.activo = false;
                //     await this.actividadRepository.save(activity);
                // }
            });
        } else {
            console.log('No se encontró ninguna actividad con activo: true');
        }
    }
}

