function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  let destination = document.getElementById('destination').value
  

  console.log("::: Form Submitted :::")
  fetch('http://localhost:8082/geonames', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      formText: formText,
      destination:  destination
      
    })
    
  }).then(res => res.json()).then(data => {
  
    //document.getElementById('subjectivity').innerHTML = data.subjectivity;
    //document.getElementById('confidence').innerHTML = data.confidence;
    //document.getElementById('irony').innerHTML = data.irony;
    document.getElementById('latitude').innerHTML = data.lat;
    document.getElementById('longitude').innerHTML = data.lng;
    document.getElementById('country').innerHTML = data.countryCode;
    
    
  }).catch(err => alert("error"));
 

};

   export { 
    handleSubmit
}

