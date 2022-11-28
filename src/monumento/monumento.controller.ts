import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { Monumento } from './entities/monumento.entity';

@Controller('monumento')
export class MonumentoController {
  constructor(private readonly monumentoService: MonumentoService) {}

  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    if(this.monumentoService.findAll())
    return this.monumentoService.findAll();
  }
  
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.monumentoService.findOne(+id);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() monumento: Monumento) {
    return this.monumentoService.create(monumento);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() monumento: Monumento) {
    return this.monumentoService.update(+id, monumento);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.monumentoService.remove(+id);
  }
}
