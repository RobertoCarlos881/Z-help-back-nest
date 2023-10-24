import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    
    // @Column()
    // fecha_publicacion time not null,
    // @Column()
    // id_usuario int not null,
    // id_publicacion int not null,
    // CONSTRAINT PublicacionesRespuestaID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id),
    // CONSTRAINT PublicacionIDOrigen FOREIGN KEY (id_publicacion) REFERENCES Publicaciones (id_publicaciones)
}