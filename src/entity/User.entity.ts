import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import 'reflect-metadata';

@Entity({ name: 'user' })
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

}
