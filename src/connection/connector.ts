import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { IConnector, IConnectOptionMySQL } from './connectOption.dto';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


export class ConnectorMySql implements IConnector {
	private static instance: ConnectorMySql;
	private dataSource: DataSource;
	protected constructor() {}

	public static getInstance() {
		if (!ConnectorMySql.instance) {
			ConnectorMySql.instance = new ConnectorMySql();
		}
		return this.instance;
	}

	public async connect(connectOption: IConnectOptionMySQL) {
		
		const mysqlConnectionOption: MysqlConnectionOptions = {
			type: 'mysql',
			synchronize: false,
			logging: false,
			timezone: '+09:00',
			replication: {
				master: connectOption.writer,
				slaves: connectOption.readers,
				canRetry: true
			},
			supportBigNumbers: true,
			namingStrategy: new SnakeNamingStrategy(),
			extra: {
				acquireTimeout: 10000,
				connectionLimit: connectOption.maxConnections,
				waitForConnections: true,
			}
		};

		this.dataSource = new DataSource(mysqlConnectionOption);
		
		return this.dataSource;
	}

	public getDataSource() {
		return this.dataSource;
	}
}
