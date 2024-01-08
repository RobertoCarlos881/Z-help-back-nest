import { IsBoolean, IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateActividadDto {
    @IsNumber()
    latitud: number;

    @IsNumber()
    longitud: number;

    @IsInt()
    @IsPositive()
    id_usuario: number;

    @IsBoolean()
    accion: boolean;
}
