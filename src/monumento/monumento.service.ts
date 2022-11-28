import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService {

  constructor(@InjectRepository(Monumento) private readonly monumentoRepository: Repository<Monumento>) {}


  
  findAll(): Promise<Monumento[]> {
    return this.monumentoRepository.find();
  }
  
  async findOne(id: number): Promise<Monumento> {
    return this.monumentoRepository.findOneById(id);
  }
  
  create(monumento: Monumento) {
    return this.monumentoRepository.save(monumento);
  }

  update(id: number, monumento: Monumento) {
    return this.monumentoRepository.update(id, monumento);
  }

  remove(id: number) {
    return this.monumentoRepository.delete(id);
  }
}
