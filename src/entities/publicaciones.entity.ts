import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    // @Column()
    // fecha_publicacion time not null,

    // @Column()
    // id_usuario: number;
    // @Column()
    // CONSTRAINT PublicacionesID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id)
}