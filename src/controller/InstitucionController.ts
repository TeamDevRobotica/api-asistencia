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
import { Institucion } from "../entity/Institucion";

@JsonController()
export class InstitucionController {
  private institucionRepository = getRepository(Institucion);

  @Get("/instituciones")
  getAll() {
    return this.institucionRepository.find();
  }

  @Get("/instituciones/:id")
  getOne(@Param("id") id: number) {
    return this.institucionRepository.findOne(id);
  }

  @Post("/instituciones")
  post(@Body() institucion: Institucion) {
    return this.institucionRepository.save(institucion);
  }
}
