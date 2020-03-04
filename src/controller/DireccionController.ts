import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from "routing-controllers";

import { getRepository } from "typeorm";
import { Direccion } from "../entity/Direccion";

@JsonController()
export class DireccionController {
  private direccionRepository = getRepository(Direccion);

  @Get("/direcciones")
  getAll() {
    return this.direccionRepository.find();
  }

  @Get("/direcciones/:id")
  getOne(@Param("id") id: number) {
    return this.direccionRepository.findOne(id);
  }

  @Post("/direcciones")
  post(@Body() direccion: Direccion) {
    return this.direccionRepository.save(direccion);
  }
}
