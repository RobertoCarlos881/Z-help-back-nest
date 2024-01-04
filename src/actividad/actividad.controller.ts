import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { CreateActividadDto } from './dto/create-actividad.dto';

@Controller('actividad')
export class ActividadController {
  constructor(private readonly actividadService: ActividadService) {}

  @Post()
  create(@Body() createActividadDto: CreateActividadDto) {
    return this.actividadService.create(createActividadDto);
  }

  @Get(':id')
  findAllById(@Param('id') id: string) {
    return this.actividadService.findAllByUser(+id);
  }

  @Get()
  findAll() {
    return this.actividadService.findAll();
  }

  @Get('actividad/:id')
  findOne(@Param('id') id: string) {
    return this.actividadService.findOne(+id);
  }

  
}
