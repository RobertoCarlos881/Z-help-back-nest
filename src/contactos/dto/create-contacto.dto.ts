import { IsInt, IsPositive, MinLength } from "class-validator";

export class CreateContactoDto {
    @MinLength(4)
    nombre_contacto: string;

    @MinLength(10)
    numero_contacto: string;
    
    @IsInt()
    @IsPositive()
    id_usuario: number;
}
