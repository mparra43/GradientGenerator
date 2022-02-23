
const express = require('express');
const cors = require('cors');
const { connection } = require('../database/config');
const templateRoute = require('../routes/template');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    
       
        //coneccion base de datos 
        this.connectDB();
        
        this.middlewares();
        this.routes();
    }
    async connectDB() {
        await connection();
    }
    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
    
        this.app.use('/api/template', templateRoute);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('server running on port', this.port);
        });
       
    }
}


module.exports = Server;