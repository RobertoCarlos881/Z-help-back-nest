import { PartialType } from '@nestjs/mapped-types';
import { CreateContactoDto } from './create-contacto.dto';
import { MinLength } from 'class-validator';

export class UpdateContactoDto extends PartialType(CreateContactoDto) {
    @MinLength(4)
    nombre_contacto: string;

    @MinLength(10)
    numero_contacto: string;
}
