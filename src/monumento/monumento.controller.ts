import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';

@Controller('monumento')
export class MonumentoController {
  constructor(private readonly monumentoService: MonumentoService) {}

  
  @Get()
  findAll() {
    return this.monumentoService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monumentoService.findOne(+id);
  }
  
  @Post()
  create(@Body() createMonumentoDto: CreateMonumentoDto) {
    return this.monumentoService.create(createMonumentoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMonumentoDto: UpdateMonumentoDto) {
    return this.monumentoService.update(+id, updateMonumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monumentoService.remove(+id);
  }
}
