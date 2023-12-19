import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Publicacion } from "./publicaciones.entity";

@Entity()
export class RespuestaPublicacion {
    @PrimaryGeneratedColumn()
    id_respuestapublicaciones: number;

    @Column()
    archivo_imagen: string;

    @Column()
    latitud: string;

    @Column()
    longitud: string;

    @Column()
    texto_publicacion: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.respuestaPublicaciones)
    usuarios: Usuarios

    @ManyToOne(() => Publicacion, (publicacion) => publicacion.respuestaPublicaciones)
    publicaciones: Publicacion
}