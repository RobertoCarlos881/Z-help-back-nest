import { Injectable } from '@nestjs/common';
import { CreateForoDto } from './dto/create-foro.dto';
import { UpdateForoDto } from './dto/update-foro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacion, PublicacionesGuardadas, RespuestaPublicacion } from 'src/entities';

@Injectable()
export class ForoService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionRepository: Repository<Publicacion>,
    @InjectRepository(PublicacionesGuardadas)
    private readonly publicacionesGuardadasRepository: Repository<PublicacionesGuardadas>,
    @InjectRepository(RespuestaPublicacion)
    private readonly respuestaPublicacionRepository: Repository<RespuestaPublicacion>
  ) {}
  
  create(createForoDto: CreateForoDto) {
    return 'This action adds a new foro';
  }

  findAll() {
    return `This action returns all foro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foro`;
  }

  update(id: number, updateForoDto: UpdateForoDto) {
    return `This action updates a #${id} foro`;
  }

  remove(id: number) {
    return `This action removes a #${id} foro`;
  }
}
