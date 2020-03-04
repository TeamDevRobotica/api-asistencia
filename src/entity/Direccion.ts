import { Entity, Column, OneToOne } from "typeorm";
import { Comun } from "./comun/Comun";
import { Institucion } from "./Institucion";

@Entity()
export class Direccion extends Comun {
  @Column()
  calle: string;

  @Column()
  altura: number;
}
