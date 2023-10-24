import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contactos {
    @PrimaryGeneratedColumn()
    id_contacto: number;
  
    @Column()
    nombre_contacto: string;

    @Column()
    numero_contacto: string;

    // id_usuario int not null,
    // CONSTRAINT ContactosID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id)
}