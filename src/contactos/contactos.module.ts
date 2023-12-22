import { Module } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contactos, Usuarios } from 'src/entities/index';

@Module({
  controllers: [ContactosController],
  providers: [ContactosService],
  imports: [TypeOrmModule.forFeature([Usuarios, Contactos])]
})
export class ContactosModule {}
