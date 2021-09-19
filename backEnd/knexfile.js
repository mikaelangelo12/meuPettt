module.exports = {
	client: 'postgresql',
	connection: {
		database: 'meupet',
		user: 'postgres',
		password: '0110'
	},
		pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
