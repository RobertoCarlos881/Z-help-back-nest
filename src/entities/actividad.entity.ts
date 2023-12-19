import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { ActividadCercana } from "./actividad-cercana.entity";

@Entity()
export class Actividad {
    @PrimaryGeneratedColumn()
    id_actividad: number;

    @Column()
    accion: boolean;

    @Column()
    latitud: string;

    @Column()
    longitud: string;
    
    @Column()
    activo: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.actividades)
    usuarios: Usuarios

    @OneToMany(() => ActividadCercana, (actividadCercana) => actividadCercana.actividad)
    actividadesCercanas: ActividadCercana[]
}