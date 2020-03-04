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
import { Persona } from "../entity/Persona";

@JsonController()
export class PersonaController {
  private personaRepository = getRepository(Persona);

  @Get("/personas")
  getAll() {
    return this.personaRepository.find();
  }

  @Get("/personas/:id")
  getOne(@Param("id") id: number) {
    return this.personaRepository.findOne(id);
  }

  @Post("/personas")
  post(@Body() persona: Persona) {
    return this.personaRepository.save(persona);
  }
}
