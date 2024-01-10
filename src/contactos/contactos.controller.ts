import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post()
  async create(@Body() createContactoDto: CreateContactoDto) {
    return this.contactosService.create(createContactoDto);
  }

  @Get(':id')
  async findAll(@Param('id') id: string) {
    return await this.contactosService.findAll(+id);
  }

  @Get('contacto/:id')
  async findOne(@Param('id') id: string) {
    return this.contactosService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {    
    return this.contactosService.remove(+id);
  }
}
