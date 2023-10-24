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

  async create(createUserDto: CreateUserDto): Promise<Partial<Usuarios>> {
    try {
      const { password, ...userData} = createUserDto;
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = this.usuariosRepository.create({
        password: hashedPassword,
        ...userData
      });
  
      await this.usuariosRepository.save(newUser);
      //const {password: _, ...user} = newUser;
      return newUser;

    } catch (error) {    
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happen!!')
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto)
    return {
      user: user,
      token: this.getJwt({id: user.id_usuario})
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const findOptions: FindOneOptions<Usuarios> = {
      where: {email}
    }
    const user = await this.usuariosRepository.findOne(findOptions);

    if (!user) {
      throw new UnauthorizedException('Not valid credentials - email');
    }
    if (password !== user.password) {
      throw new UnauthorizedException('Not valid credentials - password');
    }

    const { password: _, ...rest } = user;

    return {
      user: rest,
      token: this.getJwt({id: user.id_usuario})
    }

  }

  getJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
