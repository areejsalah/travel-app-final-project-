const app = require('./server')

const port = process.env.PORT || 8082;
const server = app.listen(port, listening);

function listening(){
    console.log('Server Running');
    console.log(`Running on localhost: ${port}`);
}

module.exports = server;