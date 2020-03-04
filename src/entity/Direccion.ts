import { Entity, Column } from "typeorm";
import { Comun } from "./comun/Comun";

@Entity()
export class Direccion extends Comun {
  @Column()
  calle: string;

  @Column()
  altura: number;
}
