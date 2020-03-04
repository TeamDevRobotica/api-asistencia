import { Entity, Column } from "typeorm";
import { Comun } from "./comun/Comun";

@Entity()
export class Usuario extends Comun {
  @Column({
    length: 50
  })
  usuario: string;

  @Column({
    length: 10
  })
  clave: string;
}
