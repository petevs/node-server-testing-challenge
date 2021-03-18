// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/destinations.db3'
    },
    migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
  },
  testing: {
    client: 'sqlite3',
    userNullAsDefault: true,
    connection: {
      filename: './data/destinations-test.db3'
    },
    migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
  }

};
