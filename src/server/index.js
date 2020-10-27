const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const geoUser = process.env.GEO_USER_NAME;
const weatherKey = process.env.WEBIT_KEY;
const pixaKey = process.env.PIX_API;

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
/*
app.post('/meaning', (req, res) => {
const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${req.body.formText}`
    axios({
        url: url,
        responseType:'json'

    }).then(data => res.json(data.data))
        
})
*/

app.post('/pixabay', (req, res) => {
    //https://pixabay.com/api/?key=18854359-960a9a9d77c92b4a88b1b54cc&q=yellow+flowers&image_type=photo
    const url = `https://pixabay.com/api/?key=${pixaKey}&q=${req.body.destination}&image_type=photo`
        axios({
            url: url,
            responseType:'json'
    
        }).then(data => res.json(data.data))
        console.log(url);
            
    })

app.post('/geonames', (req, res) => {
    const urll = `http://api.geonames.org/postalCodeSearchJSON?placename=${req.body.destination}&maxRows=10&username=${geoUser}`
        axios({
            url: urll,
            responseType:'json'
    
        }).then(data => res.json(data.data))
         console.log(urll);  
    })

    app.post('/weatherbit', (req, res) => {
        /*
        if(req.body.destination != '' && req.body.returnDate =='' && req.body.departDate ==''){
            weatherURL =`http://api.weatherbit.io/v2.0/current?city=${req.body.destination}`
        }else{
            //weatherURL =`http://api.weatherbit.io/v2.0/current?city=${req.body.destination}`
            //weatherURL =`http://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.destination}&start_date=${req.body.departDate}&end_date=${req.body.returnDate}`
            weatherURL =`http://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.destination}&days=${req.body.daysOfForecast}`
        }
        */
        const url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.destination}&days=${req.body.daysOfForecast}&key=${weatherKey}`
        console.log(url); 
            axios({
                url: url,
                responseType:'json'

            }).then(data => res.json(data.data))
                 
    })