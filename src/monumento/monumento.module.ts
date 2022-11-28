import { Module } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { MonumentoController } from './monumento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monumento } from './entities/monumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monumento])],
  controllers: [MonumentoController],
  providers: [MonumentoService]
})
export class MonumentoModule {}
