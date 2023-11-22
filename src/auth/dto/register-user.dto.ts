import { MinLength } from "class-validator";

export class RegisterUserDto {
    @MinLength(10)
    numero_telefonico: string;

    @MinLength(8)
    password: string;
}