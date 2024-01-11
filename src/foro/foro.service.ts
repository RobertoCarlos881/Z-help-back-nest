import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Publicacion, PublicacionesGuardadas, RespuestaPublicacion, Usuarios } from 'src/entities';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { CreateRespuestaPublicacionDto } from './dto/create-respuesta-publicacion.dto';
import { CreatePublicacionGuardadaDto } from './dto/create-guardads.dto';

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
  
  async createPublicaciones(createPublicacionDto: CreatePublicacionDto): Promise<Publicacion> {
    const nuevaPublicacion = new Publicacion();
    nuevaPublicacion.latitud = createPublicacionDto.latitud;
    nuevaPublicacion.longitud = createPublicacionDto.longitud;
    nuevaPublicacion.texto_publicacion = createPublicacionDto.texto_publicacion;
    nuevaPublicacion.incognito = createPublicacionDto.incognito;

    const usuarioRelacionado = new Usuarios();
    usuarioRelacionado.id_usuario = createPublicacionDto.id_usuario;
    nuevaPublicacion.usuarios = usuarioRelacionado;

    return await this.publicacionRepository.save(nuevaPublicacion);
  }

  async createComentariosPublicaciones(createRespuestaPublicacionDto: CreateRespuestaPublicacionDto): Promise<RespuestaPublicacion> {
    const nuevoComentarioPublicacion = new RespuestaPublicacion();
    nuevoComentarioPublicacion.latitud = createRespuestaPublicacionDto.latitud;
    nuevoComentarioPublicacion.longitud = createRespuestaPublicacionDto.longitud;
    nuevoComentarioPublicacion.texto_publicacion = createRespuestaPublicacionDto.texto_publicacion;
    nuevoComentarioPublicacion.incognito = createRespuestaPublicacionDto.incognito;

    const usuarioRelacionado = new Usuarios();
    usuarioRelacionado.id_usuario = createRespuestaPublicacionDto.id_usuario;
    nuevoComentarioPublicacion.usuarios = usuarioRelacionado;

    const publicacionRelacionado = new Publicacion();
    publicacionRelacionado.id_publicaciones = createRespuestaPublicacionDto.id_publicacion;
    nuevoComentarioPublicacion.publicaciones = publicacionRelacionado;

    return await this.respuestaPublicacionRepository.save(nuevoComentarioPublicacion);
  }

  async createPublicacionesGuardadas(createPublicacionGuardadaDto: CreatePublicacionGuardadaDto): Promise<PublicacionesGuardadas> {
    const nuevapUblicacionGuardada = new PublicacionesGuardadas();

    const usuarioRelacionado = new Usuarios();
    usuarioRelacionado.id_usuario = createPublicacionGuardadaDto.id_usuario;
    nuevapUblicacionGuardada.usuarios = usuarioRelacionado;

    const publicacionRelacionado = new Publicacion();
    publicacionRelacionado.id_publicaciones = createPublicacionGuardadaDto.id_publicacion;
    nuevapUblicacionGuardada.publicaciones = publicacionRelacionado;

    return await this.publicacionesGuardadasRepository.save(nuevapUblicacionGuardada);
  }

  async findAllPublicaciones(): Promise<Publicacion[]> { //todo
    const publicaciones = await this.publicacionRepository.find();

    return publicaciones;
  }

  async findByIdComentariosPublicaciones(id_publicacion: number): Promise<any[]> { //comentarios
    const options: FindOneOptions<RespuestaPublicacion> = {
      relations: ['usuarios.publicaciones', 'publicaciones'],
      where: { publicaciones: { id_publicaciones: id_publicacion } },
    };
  
    const publicaciones = await this.respuestaPublicacionRepository.find(options);
  
    return publicaciones.map(publicacion => ({
      latitud: publicacion.latitud,
      longitud: publicacion.longitud,
      texto_publicacion: publicacion.texto_publicacion,
      incognito: publicacion.incognito,
      created_at: publicacion.created_at,
      id_respuestapublicaciones: publicacion.id_respuestapublicaciones,
      id_publicacion: publicacion.publicaciones ? publicacion.publicaciones.id_publicaciones : null,
      nombre: publicacion.usuarios ? publicacion.usuarios.nombre : null,
    }));
  }
  
  async findOnePublicaciones(id: number): Promise<any[]> { //mis publicaciones
    const options: FindOneOptions<Publicacion> = {
      relations: ['usuarios'],
      where: { usuarios: {id_usuario: id} },
    };
    const publicaciones = await this.publicacionRepository.find(options);

    return publicaciones.map(publicacion => ({
      latitud: publicacion.latitud,
      longitud: publicacion.longitud,
      texto_publicacion: publicacion.texto_publicacion,
      incognito: publicacion.incognito,
      created_at: publicacion.created_at,
      id_publicacion: publicacion.id_publicaciones,
      id_usuario: publicacion.usuarios ? publicacion.usuarios.id_usuario : null,
    }));
  }

  async findAllPublicacionesGuardadas(id_user: number): Promise<any[]> {
    const options: FindManyOptions<PublicacionesGuardadas> = {
      relations: ['publicaciones', 'publicaciones.usuarios'],
      where: { usuarios: { id_usuario: id_user } },
    };
  
    const publicacionesGuardadas = await this.publicacionesGuardadasRepository.find(options);
  
    return publicacionesGuardadas.map(publicacionGuardada => {
      const publicacion = publicacionGuardada.publicaciones;
      const usuario = publicacion && publicacion.usuarios ? publicacion.usuarios : null;
  
      return {
        latitud: publicacion ? publicacion.latitud : null,
        longitud: publicacion ? publicacion.longitud : null,
        texto_publicacion: publicacion ? publicacion.texto_publicacion : null,
        incognito: publicacion ? publicacion.incognito : null,
        created_at: publicacion ? publicacion.created_at : null,
        id_publicacion: publicacion ? publicacion.id_publicaciones : null,
        nombre: usuario ? usuario.nombre : null,
      };
    });
  }

  async removePublicaciones(id: number): Promise<any> {
    await this.publicacionRepository.delete(id);
    return true;
  }
}
