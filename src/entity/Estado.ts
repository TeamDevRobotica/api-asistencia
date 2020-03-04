import { Entity, Column } from "typeorm";
import { Comun } from "./comun/Comun";

@Entity()
export class Estado extends Comun {
  @Column()
  descripcion: string;
}
