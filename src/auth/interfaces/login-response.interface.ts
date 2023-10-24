import { Usuarios } from "src/entities";

export interface LoginResponse {
    user: Usuarios;
    token: string;
}