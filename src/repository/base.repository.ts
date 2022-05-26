import { DataSource } from 'typeorm';

export class BaseRepository {
	
	protected dataSource: DataSource;
	
	constructor(dataSource: DataSource) {
		this.dataSource = dataSource;
	}
}