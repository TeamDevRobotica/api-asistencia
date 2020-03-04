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
import { Contacto } from "../entity/Contacto";

@JsonController()
export class ContactoController {
  private contactoRepository = getRepository(Contacto);

  @Get("/contactos")
  getAll() {
    return this.contactoRepository.find();
  }

  @Get("/contactos/:id")
  getOne(@Param("id") id: number) {
    return this.contactoRepository.findOne(id);
  }

  @Post("/contactos")
  post(@Body() contacto: Contacto) {
    return this.contactoRepository.save(contacto);
  }
}
