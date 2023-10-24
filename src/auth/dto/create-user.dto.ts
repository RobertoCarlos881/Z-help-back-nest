import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    nombre: string;

    @IsString()
    apellido_paterno: string;

    @IsString()
    apellido_materno: string;

    @IsEmail()
    email: string;

    @MinLength(10)
    numero_telefonico: string;

    @IsString()
    institucion: string;

    @IsString()
    identificador_politecnico: string;

    @MinLength(8)
    password: string;
}