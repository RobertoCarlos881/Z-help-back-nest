import { Injectable } from '@nestjs/common';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/entities';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  async findOne(id: number): Promise<Usuarios> {
    const options: FindOneOptions<Usuarios> = {
      where: { id_usuario: id }
    };
    const user = await this.usuariosRepository.findOne(options);
    return user;
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<Usuarios> {
    const options: FindOneOptions<Usuarios> = {
      where: { id_usuario: id }
    };
    console.log(options);
    console.log(updatePerfilDto);
    const user = await this.usuariosRepository.findOne(options);
    console.log(user);
    if (user) {
      await this.usuariosRepository.update({ id_usuario: id }, updatePerfilDto);
      const updatedUser = await this.usuariosRepository.findOne(options);
      return updatedUser;
    } else {
      throw new Error(`Usuario con ID ${id} no encontrado.`);
    }
  }

  async remove(id: number): Promise<any> {
    await this.usuariosRepository.delete(id);
    return "El contacto a sido eliminado";
  }
}
