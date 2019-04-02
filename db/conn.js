const Sequelize = require('sequelize');
const conn = new Sequelize(
    process.env.DATABASE_URL ||
    'postgres://localhost:5432/acme_user_rank', {
        logging: false
    })

module.exports = conn