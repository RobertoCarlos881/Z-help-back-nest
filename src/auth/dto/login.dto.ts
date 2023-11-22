import { MinLength } from "class-validator";

export class LoginDto {
    @MinLength(10)
    numero_telefonico: string;

    @MinLength(8)
    password: string;
}