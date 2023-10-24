import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PublicacionesGuardadas {
    @PrimaryGeneratedColumn()
    id_publicacionesguardadas: number;
    // id_usuario int not null,
    // id_publicacion int not null,
    // CONSTRAINT PublicacionGuardadasID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id),
    // CONSTRAINT PublicacionesOrigenID FOREIGN KEY (id_publicacion) REFERENCES Publicaciones (id_publicaciones)
}