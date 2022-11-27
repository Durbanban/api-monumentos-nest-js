import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonumentoModule } from './monumento/monumento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'monumentos_db',
      autoLoadEntities: true
    }),
    MonumentoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
