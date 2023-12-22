import { DefaultUser, Roles } from "src/enum/index";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RespuestaPublicacion, Publicacion, Contactos, Actividad, ActividadCercana, PublicacionesGuardadas } from "./index";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id_usuario?: number;

    @Column({default: "Usuario Nuevo"})
    nombre?: string;

    @Column({default: "usuarionuevo@gmail.com"})
    email?: string;

    @Column({default: "Instituto Politecnico Nacional"})
    institucion?: string;

    @Column({default: "0000000000"})
    identificador_politecnico?: string;

    @Column({unique: true})
    numero_telefonico: string;

    @Column()
    password?: string;

    @Column({default: "foto.png"})
    foto?: string;

    @Column({type: 'enum', enum: Roles, default: Roles.user})
    role: Roles;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    @OneToMany(() => RespuestaPublicacion, (respuestaPublicacion) => respuestaPublicacion.usuarios)
    respuestaPublicaciones: RespuestaPublicacion[]

    @OneToMany(() => Publicacion, (publicacion) => publicacion.usuarios)
    publicaciones: Publicacion[]

    @OneToMany(() => Contactos, (contactos) => contactos.usuarios)
    contactos: Contactos[]

    @OneToMany(() => Actividad, (actividad) => actividad.usuarios)
    actividades: Actividad[]

    @OneToMany(() => ActividadCercana, (actividadCercana) => actividadCercana.usuarios)
    actividadesCercanas: ActividadCercana[]

    @OneToMany(() => PublicacionesGuardadas, (publicacionesGuardadas) => publicacionesGuardadas.usuarios)
    publicacionesGuardadas: PublicacionesGuardadas[]
}