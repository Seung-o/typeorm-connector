import { User } from '../entity/User.entity';

export interface IUserRepository {
	createUser(userCreationDto: User): Promise<void>;
	getUser(id: number): Promise<User>;
	updateUser(userUpdateDto: User): Promise<void>;
}