export interface IConnector {
	connect(connectOption?: IConnectOptionMySQL | IConnectOptionDynamo | IConnectOptionRedis | IConnectOptionS3): void;
}

export interface IConnectOptionMySQL {
	writer: IConnectOption;
	readers?: IConnectOption[];
	maxConnections: number;
}

export interface IConnectOption {
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
}

export interface IConnectOptionDynamo {
	accessKeyId: string;
	secretAccessKey: string;
	region: string;
	moneyLogTableName: string;
}

export interface IConnectOptionRedis {
	host: string;
	port: number;
}

export interface IConnectOptionS3 {
	accessKeyId: string;
	secretAccessKey: string;
	region: string;
	bucket: string;
}
