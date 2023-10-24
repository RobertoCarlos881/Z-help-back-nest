import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Instituciones {
    @PrimaryGeneratedColumn()
    id_institucion: number;

    @Column()
    nombre_institucion: string;

    @Column()
    zona_geografica: string;
}