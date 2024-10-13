const app = require('./server')
//const port = 8082;
const port = process.env.PORT || 3000;
const server = app.listen(port, listening);

function listening(){
    console.log('Server Running');
    console.log(`Running on localhost: ${port}`);
}

module.exports = server;