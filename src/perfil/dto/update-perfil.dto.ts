import { IsEmail, IsString } from "class-validator";
import { CreatePerfilDto } from "./create-perfil.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
    @IsString()
    nombre: string;

    @IsEmail()
    email: string;

    @IsString()
    institucion: string;

    @IsString()
    identificador_politecnico: string;

    @IsString()
    numero_telefonico: string;

    @IsString()
    foto: string;
}
