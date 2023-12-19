import { Module } from '@nestjs/common';
import { LocalizacionService } from './localizacion.service';
import { LocalizacionController } from './localizacion.controller';

@Module({
  controllers: [LocalizacionController],
  providers: [LocalizacionService],
})
export class LocalizacionModule {}
