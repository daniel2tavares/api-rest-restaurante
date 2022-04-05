const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./src/data/database.db');


process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD finalizado!');
        process.exit(0);
    })
);

module.exports = bd;