import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { ActividadCercana } from "./actividad-cercana.entity";

@Entity()
export class Actividad {
    @PrimaryGeneratedColumn()
    id_actividad?: number;

    @Column({default: true})
    accion?: boolean;

    @Column()
    latitud: string;

    @Column()
    longitud: string;
    
    @Column({default: true})
    activo?: boolean;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.actividades)
    @JoinColumn({ name: 'id_usuario' })
    usuarios?: Usuarios

    @OneToMany(() => ActividadCercana, (actividadCercana) => actividadCercana.actividad)
    actividadesCercanas?: ActividadCercana[]
}