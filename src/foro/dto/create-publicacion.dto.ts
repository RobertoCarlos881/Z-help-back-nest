import { IsBoolean, IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreatePublicacionDto {
    @IsNumber()
    latitud: string;

    @IsNumber()
    longitud: string;

    @IsString()
    texto_publicacion: string;

    @IsBoolean()
    incognito: boolean;

    @IsInt()
    @IsPositive()
    id_usuario: number;
}
