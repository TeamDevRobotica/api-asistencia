import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Comun } from "./comun/Comun";
import { Usuario } from "./Usuario";
import { Direccion } from "./Direccion";
import { Contacto } from "./Contacto";
import { Asistencia } from "./Asistencia";

@Entity()
export class Persona extends Comun {
  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  dni: string;

  @OneToOne(type => Usuario, { cascade: true })
  @JoinColumn()
  usuario: Usuario;

  @OneToOne(type => Contacto)
  @JoinColumn()
  contacto: Contacto;

  @OneToMany(
    type => Asistencia,
    asistencia => asistencia.persona
  )
  @JoinColumn()
  asistencias: Asistencia[];
}
