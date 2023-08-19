const databaseToConnect = require('./config/database.js');
require('dotenv').config()
const app = require('./app.js')
const PORT = process.env.PORT || 7500

try {
    app.listen(PORT, async () => {
        await databaseToConnect();
        console.log(`Server Up at http://localhost:${PORT}`);
    })
} catch (e) {
    console.error(e);
    // throw new Error('database could not connect, please try again');
}
