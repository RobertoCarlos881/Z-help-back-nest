import { Injectable } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Contactos, Usuarios } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contactos)
    private readonly contactosRepository: Repository<Contactos>,
  ) {}

  async create(createContactoDto: CreateContactoDto): Promise<Contactos> {
    const nuevoContacto = new Contactos();
    nuevoContacto.nombre_contacto = createContactoDto.nombre_contacto;
    nuevoContacto.numero_contacto = createContactoDto.numero_contacto;

    const usuarioRelacionado = new Usuarios();
    usuarioRelacionado.id_usuario = createContactoDto.id_usuario;
    nuevoContacto.usuarios = usuarioRelacionado;

    return await this.contactosRepository.save(nuevoContacto);
  }

  async findOne(id: number): Promise<Contactos> {
    const options: FindOneOptions<Contactos> = {
      where: { id_contacto: id }
    };
    const user = await this.contactosRepository.findOne(options);
    return user;
  }

  async findAll(id: number): Promise<any[]> {
    const options: FindOneOptions<Contactos> = {
      relations: ['usuarios'],
      where: { usuarios: {id_usuario: id} },
    };
    const contactos = await this.contactosRepository.find(options);

    return contactos.map(contacto => ({
      id_contacto: contacto.id_contacto,
      nombre_contacto: contacto.nombre_contacto,
      numero_contacto: contacto.numero_contacto,
      id_usuario: contacto.usuarios ? contacto.usuarios.id_usuario : null,
    }));
  }

  async update(id: number, updateContactoDto: UpdateContactoDto): Promise<Contactos> {
    const options: FindOneOptions<Contactos> = {
      where: { id_contacto: id }
    };
    const user = await this.contactosRepository.findOne(options);

    await this.contactosRepository.update(user, updateContactoDto);
    return user;
  }

  async remove(id: number): Promise<any> {
    await this.contactosRepository.delete(id);
    return "El contacto a sido eliminado";
  }
}
