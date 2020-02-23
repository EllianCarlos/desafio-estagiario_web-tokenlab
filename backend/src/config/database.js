require('dotenv/config')

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    table: process.env.DB_TABLE,
    host: process.env.DB_HOST,
    port:3306,
    dialect: "mysql",
    define: {
      timestamps: true,
      timestampsWithDefaults: true,
      underscored: true,
      underscoredAll: true,
    }
}