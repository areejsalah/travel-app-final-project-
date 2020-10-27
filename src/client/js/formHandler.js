
function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  //let formText = document.getElementById('name').value;
  let destination = document.getElementById('destination').value
  let startDate = document.getElementById('start-date').value
  let endDate = document.getElementById('end-date').value
  
  let todaysDate = new Date().getTime();
  //let todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')
  let departDate = new Date(startDate);
  let returnDate = new Date(endDate);
  let msInDay = 1000 * 3600 * 24;
  let timeLeft = Math.floor((departDate - todaysDate) / msInDay);
console.log(timeLeft);
console.log(todaysDate);
  if (timeLeft == -1){
    
    timeLeft = "Your trip is today";
  }else if (timeLeft < -1){
    timeLeft = "Select a future date";
  } else{
    timeLeft ++;
  }
  let daysOfForecast = 7
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
    document.getElementById('departs').innerHTML = departDate;
    document.getElementById('returns').innerHTML = returnDate;
    //document.getElementById('description').innerHTML = data.data[0].weather.description;
    let positionOnDom = document.querySelector('#forecast');
    
    for (let i= 0; i <= daysOfForecast; i++){
       let block = `<div class="line-wrapper">
                        <p> Day ${i} </p>
                        <div id="icons"><img src="icons/${data.data[i].weather.icon}.png"></div>
                        <div id="aveTemp">${data.data[i].temp}<span>&#8451;</span></div>
                        <div id="description">${data.data[i].weather.description}</div>
                    </div>`;
                    positionOnDom.insertAdjacentHTML('afterend', block);
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
  
    
    document.getElementById('latitude').innerHTML = data.postalCodes[0].lat;
    document.getElementById('longitude').innerHTML = data.postalCodes[0].lng;
    //document.getElementById('country').innerHTML = 
    document.getElementById('city').innerHTML = `${data.postalCodes[0].placeName}, ${data.postalCodes[0].countryCode}`;
    document.getElementById('countdown').innerHTML = timeLeft;
    //document.getElementById('departs').innerHTML = departDate;
    //document.getElementById('returns').innerHTML = returnDate;
    //document.getElementById('description').innerHTML = data.data[0].weather.description;
    //document.getElementById('aveTemp').innerHTML = data.data[0].temp;



    
    
  }).catch(err => alert("error - geonames"));

};





   export { 
    handleSubmit
}

