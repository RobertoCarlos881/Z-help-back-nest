import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";

@Entity()
export class Contactos {
    @PrimaryGeneratedColumn()
    id_contacto: number;
  
    @Column()
    nombre_contacto: string;

    @Column()
    numero_contacto: string;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.contactos)
    usuarios: Usuarios
}