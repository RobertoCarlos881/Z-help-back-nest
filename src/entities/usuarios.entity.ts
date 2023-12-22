import { DefaultUser, Roles } from "src/enum/index";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RespuestaPublicacion, Publicacion, Contactos, Actividad, ActividadCercana, PublicacionesGuardadas } from "./index";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id_usuario?: number;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.nameDefault})
    nombre?: string;

    @Column({type: 'enum', enum: DefaultUser, default: DefaultUser.emailDefault})
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