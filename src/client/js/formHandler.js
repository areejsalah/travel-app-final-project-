
var moment = require('moment');// require momentjs

function handleSubmit(event) {
  event.preventDefault()
  /*
  cityField = document.querySelector('#destination');
  startDateField = document.querySelector('#start-date');
  endDateField = document.querySelector('#end-date');

  if(cityField == "" && startDateField =="" && endDateField =="" ){
    alert('type a city');
  }
  
  else{
    event.preventDefault()
    // remove hide classes
    document.querySelector('.city-section').classList.remove('hide');
    document.querySelector('.forecast-section').classList.remove('hide');
    document.querySelector('.itin-section').classList.remove('hide');
  }
*/
 
  
    // remove hide classes
    document.querySelector('.city-section').classList.remove('hide');
    document.querySelector('.forecast-section').classList.remove('hide');
    document.querySelector('.itin-section').classList.remove('hide');
  

  // check what text was put into the form field
  //let formText = document.getElementById('name').value;

  let destination = document.getElementById('destination').value
  let startDate = document.getElementById('start-date').value
  let endDate = document.getElementById('end-date').value

  let daysOfForecast = 5; // total days of forecast
  let daysSingularOrPlural="";
  let todaysDate = new Date().getTime(); // today's date
  //let todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')
  let departDate = new Date(startDate).getTime();
  let returnDate = new Date(endDate).getTime();
  let msInDay = 1000 * 3600 * 24;
  let timeLeft = Math.floor((departDate - todaysDate) / msInDay);
  let travelLength = Math.floor((returnDate - departDate ) / msInDay);
  //travelLength++;
console.log(timeLeft);
console.log(todaysDate);
  if (timeLeft === -1){
    timeLeft = "Your trip starts today";
  }else if (timeLeft < -1){
    timeLeft = "Select a future departure date";
  } else{
    timeLeft ++;
  }

  //condition to pluralizes days
  if (travelLength > 1){
    //travelLength+2;
    daysSingularOrPlural ="days";
  }else if (travelLength < 0){
    travelLength ="Select a future return date";
    daysSingularOrPlural = "";
  }else{
    daysSingularOrPlural ="day";
  } 

  


  console.log("::: Form Submitted :::")
  fetch('http://localhost:8082/weatherbit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      //formText: formText,
      destination:  destination,
      daysOfForecast: daysOfForecast,
      //timeLeft: timeLeft,
      departDate: departDate,
      returnDate: returnDate
      //lng: data.lng,
      //lat: data.lat


      
    })
    
  })
  .then(res => res.json()).then(data => {
  
    //document.getElementById('subjectivity').innerHTML = data.subjectivity;
    //document.getElementById('confidence').innerHTML = data.confidence;
    //document.getElementById('irony').innerHTML = data.irony;
    //document.getElementById('latitude').innerHTML = data.lat;
    //document.getElementById('longitude').innerHTML = data.lng;
    //document.getElementById('country').innerHTML = data.countryCode;
    //document.getElementById('countdown').innerHTML = timeLeft;
    //document.getElementById('departs').innerHTML = departDate;
    //document.getElementById('returns').innerHTML = returnDate;
    
    document.querySelector('[data-depart-date]').innerHTML = moment(startDate).format("MMM Do YYYY"); //(departDate).toDateString();
    document.querySelector('[data-return-date]').innerHTML = moment(endDate).format("MMM Do YYYY"); //(returnDate).toDateString();
    document.querySelector('[data-travel-length]').innerHTML = `${travelLength} ${daysSingularOrPlural}`
    document.querySelector('[data-day-left]').innerHTML = timeLeft;

    

    //document.getElementById('description').innerHTML = data.data[0].weather.description;
    //document.querySelector('[data-today-date-test]').innerHTML = new Date(data.data[0].valid_date).toDateString();
    document.querySelector('[data-today-date]').innerHTML = moment(data.data[0].valid_date).format("MMM Do YYYY");
    //moment().format("MMM Do YY"); 
    document.querySelector('[data-today-desc]').innerHTML = data.data[0].weather.description;
    document.querySelector('[data-today-weather]').innerHTML =`${data.data[0].temp}<span class="temp-unit">&#8451;</span>`
    
   
    // reset dom
    document.querySelector('[data-forecast]').innerHTML=""; 
    let positionOnDom = document.querySelector('[data-forecast]');
    
    for (let i= 1; i <= daysOfForecast; i++){
      
      let weatherCard = `<div class="weather-card">
                            <p class="weather-card-desc">${moment(data.data[i].valid_date).format("MMM Do YYYY")}</p>
                            <img class="weather-icon" src="./icons/c02d.png">
                            <p class="minmax-temp">${data.data[0].min_temp}&#8451; - ${data.data[0].max_temp}&#8451;</p>
                            <p class="weather-card-desc">${data.data[i].weather.description}</p>
                        </div>`;
       /*let block = `<div class="line-wrapper">
                        <p> Day ${i} </p>
                        <div id="icons"><img src="icons/${data.data[i].weather.icon}.png"></div>
                        <div id="aveTemp">${data.data[i].temp}<span>&#8451;</span></div>
                        <div id="description">${data.data[i].weather.description}</div>
                    </div>`;
                    positionOnDom.insertAdjacentHTML('afterend', block);
                    */
                    positionOnDom.insertAdjacentHTML('beforeend', weatherCard);
    }

    
    //document.getElementById('aveTemp').innerHTML = data.data[0].temp;
    //let currentDate = new Date();
    //document.getElementById('currentDate').innerHTML = currentDate;


    
    
  }).catch(err => alert("error - weatherbit"));
 
  console.log("::: Form Submitted :::")
  fetch('http://localhost:8082/pixabay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      //formText: formText,
      destination:  destination,
      daysOfForecast: daysOfForecast,
      //timeLeft: timeLeft,
      departDate: departDate,
      returnDate: returnDate
      //lng: data.lng,
      //lat: data.lat


      
    })
    
  })
  .then(res => res.json()).then(data => {
  
    //document.getElementById('subjectivity').innerHTML = data.subjectivity;
    //document.getElementById('confidence').innerHTML = data.confidence;
    //document.getElementById('irony').innerHTML = data.irony;
    //document.getElementById('latitude').innerHTML = data.lat;
    //document.getElementById('longitude').innerHTML = data.lng;
    //document.getElementById('country').innerHTML = data.countryCode;
    //document.getElementById('countdown').innerHTML = timeLeft;
    //document.getElementById('departs').innerHTML = departDate;
    //document.getElementById('returns').innerHTML = returnDate;
    document.querySelector('.city-card').style.backgroundImage = `url('${data.hits[0].largeImageURL}')`;
    
    //document.getElementById('aveTemp').innerHTML = data.data[0].temp;
    //let currentDate = new Date();
    //document.getElementById('currentDate').innerHTML = currentDate;


    
    
  }).catch(err => alert("error - pixabay"));
 

  fetch('http://localhost:8082/geonames', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      //formText: formText,
      destination:  destination
      //timeLeft: timeLeft,
      //departDate: departDate,
      //returnDate: returnDate
      //lng: data.lng,
      //lat: data.lat


      
    })
    
  })
  .then(res => res.json()).then(data => {
  
    
    //document.getElementById('latitude').innerHTML = data.postalCodes[0].lat;
    document.querySelector('[data-lat]').innerHTML =`lat: ${data.postalCodes[0].lat}`;
    document.querySelector('[data-lng]').innerHTML =`lon: ${data.postalCodes[0].lng}`;
    //document.getElementById('longitude').innerHTML = data.postalCodes[0].lng;
   
    //document.getElementById('country').innerHTML = 
    //document.getElementById('city').innerHTML = `${data.postalCodes[0].placeName}, ${data.postalCodes[0].countryCode}`;
    document.querySelector('[data-city]').innerHTML =`${data.postalCodes[0].placeName}, ${data.postalCodes[0].countryCode}`;

    //document.getElementById('countdown').innerHTML = timeLeft;
    //document.getElementById('departs').innerHTML = departDate;
    //document.getElementById('returns').innerHTML = returnDate;
    //document.getElementById('description').innerHTML = data.data[0].weather.description;
    //document.getElementById('aveTemp').innerHTML = data.data[0].temp;



    
    
  }).catch(err => alert("error - geonames"));

};





   export { 
    handleSubmit
}

