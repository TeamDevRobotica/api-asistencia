import { Entity, Column, ManyToOne, OneToOne } from "typeorm";
import { Comun } from "./comun/Comun";

@Entity()
export class Contacto extends Comun {
  @Column()
  tel: string;

  @Column()
  cel: string;

  @Column()
  email: string;
}
