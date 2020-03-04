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
import { Marcado } from "../entity/Marcado";

@JsonController()
export class MarcadoController {
  private marcadoRepository = getRepository(Marcado);

  @Get("/marcados")
  getAll() {
    return this.marcadoRepository.find();
  }

  @Get("/marcados/:id")
  getOne(@Param("id") id: number) {
    return this.marcadoRepository.findOne(id);
  }

  @Post("/marcados")
  post(@Body() marcado: Marcado) {
    return this.marcadoRepository.save(marcado);
  }
}
