import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Comun } from "./comun/Comun";
import { Persona } from "./Persona";
import { Marcado } from "./Marcado";

@Entity()
export class Asistencia extends Comun {
  @Column()
  fecha: Date;

  @ManyToOne(
    type => Persona,
    persona => persona.asistencias
  )
  persona: Persona;

  @OneToMany(
    type => Marcado,
    marcado => marcado.asistencia
  )
  @JoinColumn()
  marcados: Marcado[];
}
