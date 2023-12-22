import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @JoinColumn({ name: 'id_usuario' })
    usuarios: Usuarios
}