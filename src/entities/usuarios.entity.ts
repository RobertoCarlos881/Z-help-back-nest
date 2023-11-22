import { DefaultUser } from "src/enum/defaultUser.enum";
import { Roles } from "src/enum/roles.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id_usuario?: number;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.nameDefault})
    nombre?: string;

    @Column({unique: true, type: 'enum', enum: DefaultUser, default: DefaultUser.emailDefault})
    email?: string;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.institucionDefault})
    institucion?: string;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.identificadorDefault})
    identificador_politecnico?: string;

    @Column({unique: true})
    numero_telefonico: string;

    @Column()
    password?: string;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.fotoDefault})
    foto?: string;

    @Column({type: 'enum', enum: Roles, default: Roles.user})
    role: Roles;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}