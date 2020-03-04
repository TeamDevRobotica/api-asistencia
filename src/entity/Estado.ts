import { Entity, Column, OneToOne } from "typeorm";
import { Comun } from "./comun/Comun";
import { Marcado } from "./Marcado";

@Entity()
export class Estado extends Comun {
  @Column()
  descripcion: string;

  @OneToOne(
    type => Marcado,
    marcado => marcado.estado
  )
  marcado: Marcado;
}
