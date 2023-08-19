const mongoose = require('mongoose')


const dbConnect = () => {

        mongoose
        .connect(
            process.env.MONGO_URI
        )
        .then((conn) => {
            console.log(`CONNECTED TO MongoDB: ${conn.connection.host}`)
                
            })
        .catch((e) => {
            console.log(`Database connection failed`, e.message );
        })
  
}

module.exports = dbConnect;
