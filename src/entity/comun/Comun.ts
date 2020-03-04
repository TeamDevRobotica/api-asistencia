import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Esta clase abstracta se utiliza para que hereden sus propiedades en comun
 * Autor Ivan Nicolas
 */
export abstract class Comun {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaCreacion: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaActualizacion: Date;
}
