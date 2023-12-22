import { IsEmail, IsString } from "class-validator";

export class CreatePerfilDto {
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