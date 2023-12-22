import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { FindOneOptions, Repository } from 'typeorm';
import * as bcryptjs from "bcryptjs";

import { Usuarios } from 'src/entities';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginResponse } from './interfaces/login-response.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Usuarios> {
    try {
      const { password, ...userData } = createUserDto;
      const newUser = this.usuariosRepository.create({
        password: bcryptjs.hashSync(password, 10),
        ...userData
      });
  
      await this.usuariosRepository.save(newUser);
      const { password: _, created_at, updated_at, email, institucion, identificador_politecnico, ...user } = newUser;
      return user;
    } catch (error) {    
      console.log(error);
      
      if (error.code === '23505') {
        throw new BadRequestException(`El numero telefonico que ingresaste ya esta registrado`)
      }
      throw new InternalServerErrorException('Something terrible happen!!')
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto)
    return {
      user: user,
      token: this.getJwt({ id: user.id_usuario})
    };
  }

  async login(loginDto: LoginDto) {
    const { numero_telefonico, password } = loginDto;
    const user = await this.usuariosRepository.findOne({ where: { numero_telefonico } });
    if (!user) {
      throw new UnauthorizedException("Not valid credentials - email"); 
    }

    if (!bcryptjs.compareSync( password, user.password )) {
      throw new UnauthorizedException("Not valid credentials - password"); 
    }

    const { password: _, created_at, updated_at, email, institucion, identificador_politecnico, ...rest } = user;

    return {
      user: rest,
      token: this.getJwt({ id: user.id_usuario })
    }
  }

  findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  async findUserById(id: number) {
    const options: FindOneOptions<Usuarios> = {
      where: { id_usuario: id }
    };
    const user = await this.usuariosRepository.findOne(options);
    const { password, created_at, updated_at, email, ...rest } = user;
    return rest;
  }


  getJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
