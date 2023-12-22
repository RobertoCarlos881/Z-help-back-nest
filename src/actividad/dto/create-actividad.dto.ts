import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateActividadDto {
    @IsString()
    latitud: string;

    @IsString()
    longitud: string;

    @IsInt()
    @IsPositive()
    id_usuario: number;
}
