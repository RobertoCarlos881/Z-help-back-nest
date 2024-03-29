import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Publicacion } from "./publicaciones.entity";

@Entity()
export class RespuestaPublicacion {
    @PrimaryGeneratedColumn()
    id_respuestapublicaciones: number;

    @Column({default: "foto.jpg"})
    archivo_imagen: string;

    @Column()
    latitud: string;

    @Column()
    longitud: string;

    @Column()
    texto_publicacion: string;

    @Column()
    incognito: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.respuestaPublicaciones)
    @JoinColumn({ name: 'id_usuarios' })
    usuarios: Usuarios

    @ManyToOne(() => Publicacion, (publicacion) => publicacion.respuestaPublicaciones)
    @JoinColumn({ name: 'id_publicacion' })
    publicaciones: Publicacion
}