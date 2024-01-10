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
        const activities = await this.actividadRepository.find({
            where: {
                activo: true,
            },
        });
    
        if (activities.length > 0) {
            const now = new Date();
    
            activities.forEach(async (activity) => {
                const fechaYHoraString = activity.created_at;
                
                const activityTimestamp = new Date(fechaYHoraString).getTime();
                const timeDiff = Math.floor((now.getTime() - activityTimestamp) / (1000 * 60));
    
                if (timeDiff > 15) {
                    activity.activo = false;
                    await this.actividadRepository.save(activity);
                }
            });
        } else {
            console.log('No se encontró ninguna actividad con activo: true');
        }
    }
    
}

