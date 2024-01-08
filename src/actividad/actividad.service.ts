import { Injectable } from '@nestjs/common';
import { CreateActividadDto } from './dto/create-actividad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividad, Usuarios } from 'src/entities';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ActividadService {
  constructor(
    @InjectRepository(Actividad)
    private readonly actividadRepository: Repository<Actividad>,
  ) {}
  
  async create(createActividadDto: CreateActividadDto): Promise<Actividad> {
    const nuevaActividad = new Actividad();
    nuevaActividad.latitud = createActividadDto.latitud;
    nuevaActividad.longitud = createActividadDto.longitud;
    nuevaActividad.accion = createActividadDto.accion;

    const usuarioRelacionado = new Usuarios();
    usuarioRelacionado.id_usuario = createActividadDto.id_usuario;
    nuevaActividad.usuarios = usuarioRelacionado;

    return await this.actividadRepository.save(nuevaActividad);
  }

  async findAllByUser(id: number): Promise<any[]> {
    const options: FindOneOptions<Actividad> = {
      relations: ['usuarios'],
      where: { usuarios: {id_usuario: id} },
    };
    const actividades = await this.actividadRepository.find(options);

    const actividadesConAccionTrue = actividades.filter((actividad) => actividad.accion === true);
    
    const resultado = actividadesConAccionTrue.map(actividad => ({
      id_actividad: actividad.id_actividad,
      latitud: actividad.latitud,
      longitud: actividad.longitud,
      created_at: actividad.created_at,
      id_usuario: actividad.usuarios ? actividad.usuarios.id_usuario : null,
    }));

    return resultado;
  }

  async findOne(id: number): Promise<Actividad> {
    const options: FindOneOptions<Actividad> = {
      where: { id_actividad: id }
    };
    const user = await this.actividadRepository.findOne(options);
    return user;
  }

  async findAll(): Promise<any[]> {
    const actividades = await this.actividadRepository.find();

    const actividadesConAccionTrue = actividades.filter((actividad) => actividad.activo === true);
    
    const resultado = actividadesConAccionTrue.map(actividad => ({
      latitud: actividad.latitud,
      longitud: actividad.longitud,
      accion: actividad.accion,
      creado: actividad.created_at
    }));

    return resultado;
  }
}
