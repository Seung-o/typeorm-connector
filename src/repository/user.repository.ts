import { BaseRepository } from './base.repository';
import { DataSource } from 'typeorm';
import { ConnectorMySql } from '../connection/connector';
import { User } from '../entity/User.entity';
import { IUserRepository } from '../interface/user.interface';

export class UserRepository extends BaseRepository implements IUserRepository {
	private static instance;
	
	constructor(dataSource: DataSource) {
		super(dataSource);
	}

	public static getInstance() {
		if (!UserRepository.instance) {
			UserRepository.instance = new UserRepository(ConnectorMySql.getInstance().getDataSource());
		}
		return this.instance;
	}

	private userRepository = this.dataSource.getRepository(User);

	public async createUser(userCreationDto: {firstName: string; lastName: string; age: number}) {
		const { firstName, lastName, age } = userCreationDto;
		await this.userRepository.insert({ firstName, lastName, age });
	}

	public async getUser(id: number) {
		return await this.userRepository.findOneBy({ id });
	}

	public async updateUser(userUpdateDto: {id: number; firstName?: string; lastName?: string; age?: number}) {
		const { id, firstName, lastName, age } = userUpdateDto;
		await this.userRepository.update({ id }, { firstName, lastName, age });
	}
}
