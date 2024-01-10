import { IsInt, IsPositive } from "class-validator";

export class CreatePublicacionGuardadaDto {
    @IsInt()
    @IsPositive()
    id_usuario: number;

    @IsInt()
    @IsPositive()
    id_publicacion: number;
}