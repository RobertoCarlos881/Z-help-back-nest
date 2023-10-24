import { Roles } from "src/enum/roles.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @Column()
    apellido_paterno: string;

    @Column()
    apellido_materno: string;

    @Column({unique: true})
    email: string;

    @Column()
    institucion: string;

    @Column()
    identificador_politecnico: string;

    @Column()
    numero_telefonico: string;

    @Column()
    password: string;

    @Column()
    foto: string;

    @Column({type: 'enum', enum: Roles, default: Roles.user})
    role: Roles;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}