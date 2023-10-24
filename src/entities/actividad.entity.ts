import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    // id_usuario int not null,
    // CONSTRAINT ActividadID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id)
}