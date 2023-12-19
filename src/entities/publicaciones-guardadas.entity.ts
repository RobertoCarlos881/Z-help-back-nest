import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Publicacion } from "./publicaciones.entity";

@Entity()
export class PublicacionesGuardadas {
    @PrimaryGeneratedColumn()
    id_publicacionesguardadas: number;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.publicacionesGuardadas)
    usuarios: Usuarios

    @ManyToOne(() => Publicacion, (publicacion) => publicacion.publicacionesGuardadas)
    publicaciones: Publicacion
}