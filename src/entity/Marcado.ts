import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Comun } from "./comun/Comun";
import { Asistencia } from "./Asistencia";
import { Institucion } from "./Institucion";
import { Estado } from "./Estado";

@Entity()
export class Marcado extends Comun {
  @Column()
  geolocalizacion: string;

  @Column()
  hora: Date;

  @Column()
  descripcion: string;

  @ManyToOne(
    type => Asistencia,
    asistencia => asistencia.marcados
  )
  asistencia: Asistencia;

  @ManyToOne(
    type => Institucion,
    institucion => institucion.marcados
  )
  institucion: Institucion;

  @OneToOne(type => Estado)
  @JoinColumn()
  estado: Estado;
}
