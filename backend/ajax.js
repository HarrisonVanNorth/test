
const postUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB4fjQM4MdQ0LioSX5uMDoPlVI29GlP6G8&callback=initMap";
const container = document.querySelector(".container");

// FETCH :

// go to url and get data
fetch(`${postUrl}`)
  // once we have our data clean it up for us
  .then(function(response) {
    // turn readable stream into json (javascript object notation)
    return response.json();
  })
  // once data is turned into json do something else
  .then(function(jsonData) {
    console.log(jsonData);
    for (let i = 0; i < jsonData.length; i++) {
      container.innerHTML += `<p>${jsonData[i].title}</p>`;
    }
  });

// AXIOS :

// using get method, console.log() the response from the route
axios.get(postUrl).then(axiosResponse => console.log("axios", axiosResponse));
