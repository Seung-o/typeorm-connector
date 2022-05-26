import { IConnectOptionMySQL } from './connection/connectOption.dto';
import { initService } from './connection';
import { UserRepository } from './repository/user.repository';


const connectOption: IConnectOptionMySQL = {
	writer: {
		host: '127.0.0.1',
		port: 3306,
		username: 'root',
		password: '0000',
		database: 'test',
	},
	readers: [
		{
			host: '127.0.0.1',
			port: 3306,
			username: 'root',
			password: '0000',
			database: 'test',
		}
	],
	maxConnections: 1
};

const test = (async () => {

	await initService(connectOption);

	try {
		// console.log(dataSource);
		console.log('Inserting a new user into the database...');
		await UserRepository.getInstance().createUser({ firstName: 'Ha', lastName: 'Seungo', age: 25 });
		
		console.log('Loading users from the database...');
		console.log(await UserRepository.getInstance().getUser(1));

		console.log('Updating users from the database...');
		await UserRepository.getInstance().updateUser({ id: 1, firstName: 'Ha', lastName: 'Seungo', age: 23 });

		console.log('Here you can setup and run express / fastify / any other framework.');
	} catch (error) {
		console.log(error);
	}
	
});

test();
