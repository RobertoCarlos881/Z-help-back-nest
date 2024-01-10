import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { Usuarios } from 'src/entities/index';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService],
  imports: [TypeOrmModule.forFeature([Usuarios])]
})
export class PerfilModule {}
