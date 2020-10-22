const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const geoUser = process.env.USER_NAME;

var path = require('path')
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser');


// Cors for cross origin allowance
const cors = require('cors');

const app = express()

//app.use(express.static('src/client'))
app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('/client/views/index.html', { root: __dirname + '/..' })

    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('listening on port 8082!')
})

app.post('/meaning', (req, res) => {
const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${req.body.formText}`
    axios({
        url: url,
        responseType:'json'

    }).then(data => res.json(data.data))
        
})

app.post('/geonames', (req, res) => {
    const url = `http://api.geonames.org/postalCodeSearchJSON?placename=${req.body.destination}&maxRows=10&username=${geoUser}`
        axios({
            url: url,
            responseType:'json'
    
        }).then(data => res.json(data.data.postalCodes[0]))
         console.log(url);  
    })