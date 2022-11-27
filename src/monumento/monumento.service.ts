import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService {

  constructor(@InjectRepository(Monumento) private readonly monumentoRepository: Repository<Monumento>) {}


  
  findAll(): Promise<Monumento[]> {
    return this.monumentoRepository.find();
  }
  
  async findOne(id: number): Promise<Monumento> {
    return this.monumentoRepository.findOne(id);//Endpoint
  }
  
  create(createMonumentoDto: CreateMonumentoDto) {
    return 'This action adds a new monumento';
  }

  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    return `This action updates a #${id} monumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} monumento`;
  }
}
