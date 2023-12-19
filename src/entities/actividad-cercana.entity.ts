import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { Actividad } from "./actividad.entity";

@Entity()
export class ActividadCercana {
    @PrimaryGeneratedColumn()
    id_actividadcercana: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.actividadesCercanas)
    usuarios: Usuarios

    @ManyToOne(() => Actividad, (actividad) => actividad.actividadesCercanas)
    actividad: Actividad
}