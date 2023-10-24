import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ActividadCercana {
    @PrimaryGeneratedColumn()
    id_actividadcercana: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // id_usuario int not null,
    // id_actividadprincipal int not null,
    // CONSTRAINT AlertaID FOREIGN KEY (id_usuario) REFERENCES Usuarios (id),
    // CONSTRAINT ActividadesID FOREIGN KEY (id_actividadprincipal) REFERENCES Actividad (id_actividad)
}