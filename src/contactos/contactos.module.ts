import { Module } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';

@Module({
  controllers: [ContactosController],
  providers: [ContactosService],
})
export class ContactosModule {}
