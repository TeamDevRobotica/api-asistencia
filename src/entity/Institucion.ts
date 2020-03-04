import { Entity, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { Comun } from "./comun/Comun";
import { Marcado } from "./Marcado";
import { Direccion } from "./Direccion";
import { Contacto } from "./Contacto";

@Entity()
export class Institucion extends Comun {
  @Column()
  siglas: string;

  @Column()
  nombre: string;

  @Column()
  cue: string;

  @Column()
  geolocalizacion: string;

  @OneToMany(
    type => Marcado,
    marcado => marcado.asistencia
  )
  @JoinColumn()
  marcados: Marcado[];

  @OneToOne(type => Direccion)
  @JoinColumn()
  direccion: Direccion;

  @OneToOne(type => Contacto)
  @JoinColumn()
  contacto: Contacto;
}
