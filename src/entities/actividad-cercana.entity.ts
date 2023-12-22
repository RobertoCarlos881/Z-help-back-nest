import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    @JoinColumn({ name: 'id_usuario' })
    usuarios: Usuarios

    @ManyToOne(() => Actividad, (actividad) => actividad.actividadesCercanas)
    @JoinColumn({ name: 'id_actividad' })
    actividad: Actividad
}