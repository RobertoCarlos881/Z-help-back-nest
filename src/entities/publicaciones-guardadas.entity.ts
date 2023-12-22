import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Publicacion } from "./publicaciones.entity";

@Entity()
export class PublicacionesGuardadas {
    @PrimaryGeneratedColumn()
    id_publicacionesguardadas: number;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.publicacionesGuardadas)
    @JoinColumn({ name: 'id_publicacionesguardadas' })
    usuarios: Usuarios

    @ManyToOne(() => Publicacion, (publicacion) => publicacion.publicacionesGuardadas)
    @JoinColumn({ name: 'id_publicacion' })
    publicaciones: Publicacion
}