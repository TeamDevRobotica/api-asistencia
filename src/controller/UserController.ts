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
import { Usuario } from "../entity/Usuario";

@JsonController()
export class UsuarioController {
  private usuarioRepository = getRepository(Usuario);

  @Get("/usuarios")
  getAll() {
    return this.usuarioRepository.find();
  }

  @Get("/usuarios/:id")
  getOne(@Param("id") id: number) {
    return this.usuarioRepository.findOne(id);
  }

  @Post("/usuarios")
  post(@Body() usuario: Usuario) {
    return this.usuarioRepository.save(usuario);
  }
}
