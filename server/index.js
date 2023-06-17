const server = require('./src/app.js');
//const { conn } = require('./src/db.js');
require('dotenv').config();
const {
    PORT
} = process.env;

//conn.sync({ force: false, alter:true }).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at http://localhost:${PORT}`); // eslint-disable-line no-console
    });
//});