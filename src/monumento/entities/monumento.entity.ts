import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monumento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryCode: string;
    
    @Column()
    countryName: string;

    @Column()
    cityName: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    location: string;
     

}