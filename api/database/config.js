const mongoose = require('mongoose');


const connection = async () => {

    try {
       await mongoose.connect(process.env.MOGODB_CNN);
       console.log('the database is connected');
     }
    catch (error) {
        console.error(error);
        throw new Error('error starting database')
    }
}

module.exports={
    connection,
}