import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios, RespuestaPublicacion, PublicacionesGuardadas } from "./index";

@Entity()
export class Publicacion {
    @PrimaryGeneratedColumn()
    id_publicaciones: number;

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

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.publicaciones)
    usuarios: Usuarios

    @OneToMany(() => RespuestaPublicacion, (repuestaPublicacion) => repuestaPublicacion.publicaciones)
    respuestaPublicaciones: RespuestaPublicacion[]

    @OneToMany(() => PublicacionesGuardadas, (publicacionesGuardadas) => publicacionesGuardadas.publicaciones)
    publicacionesGuardadas: PublicacionesGuardadas[]
}