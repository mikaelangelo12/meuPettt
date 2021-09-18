const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: {
		database: 'meupet',
		user: 'postgresql',
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
