import { IConnectOptionMySQL } from './connectOption.dto';
import { ConnectorMySql } from './connector';

const initService = async function (connectOption: IConnectOptionMySQL) {
	const connector = await ConnectorMySql.getInstance();
	const dataSource = await connector.connect(connectOption);
	dataSource.setOptions({
		entities: ['src/entity/**/*.entity{.ts,.js}'],
		migrations: ['src/migration/**/*.ts'],
	});
	await dataSource.initialize();
	console.log('[Service] Connected');
	return dataSource;
};

export { initService };	