import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForoService } from './foro.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { CreateRespuestaPublicacionDto } from './dto/create-respuesta-publicacion.dto';
import { CreatePublicacionGuardadaDto } from './dto/create-guardads.dto';

@Controller('foro')
export class ForoController {
  constructor(private readonly foroService: ForoService) {}

  @Post('publicacion')
  createPublicacion(@Body() createPublicacionDto: CreatePublicacionDto) {
    return this.foroService.createPublicaciones(createPublicacionDto);
  }

  @Post('comentario')
  createComentarioPublicacion(@Body() createRespuestaPublicacionDto: CreateRespuestaPublicacionDto) {
    return this.foroService.createComentariosPublicaciones(createRespuestaPublicacionDto);
  }

  @Post('guardadas')
  createPublicacionGuardada(@Body() createPublicacionGuardadaDto: CreatePublicacionGuardadaDto) {
    return this.foroService.createPublicacionesGuardadas(createPublicacionGuardadaDto);
  }

  @Get('publicacion')
  findAllPublications() {
    return this.foroService.findAllPublicaciones();
  }

  @Get('comentario/:id_publicacion')
  async findByIdComentariosPublications(@Param('id_publicacion') id_publicacion: number) {
    const publicacionesComentadas = await this.foroService.findByIdComentariosPublicaciones(id_publicacion);
    return publicacionesComentadas;
  }

  @Get('publicacion/:id')
  findOnePublications(@Param('id') id: string) {
    return this.foroService.findOnePublicaciones(+id);
  }

  @Get('guardadas/:id_user')
  async findOnePublicationsGuardadas(@Param('id_user') id_user: number) {
    const publicacionesGuardadas = await this.foroService.findAllPublicacionesGuardadas(id_user);
    return publicacionesGuardadas;
  }

  @Delete('publicacion/:id')
  remove(@Param('id') id: string) {
    return this.foroService.removePublicaciones(+id);
  }
}
