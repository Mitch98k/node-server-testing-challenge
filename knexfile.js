// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './mistborn.db3'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './mistborn/test.db3'
    }
  }

};
