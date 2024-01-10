import { IsBoolean, IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateRespuestaPublicacionDto {
    @IsInt()
    @IsPositive()
    id_usuario: number;

    @IsInt()
    @IsPositive()
    id_publicacion: number;

    @IsNumber()
    latitud: string;

    @IsNumber()
    longitud: string;

    @IsString()
    texto_publicacion: string;

    @IsBoolean()
    incognito: boolean;
}