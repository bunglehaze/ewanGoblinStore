let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked then disable button
searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
    document.querySelector('#search').disabled = true;
  })
  
  //An asynchronous function to fetch data from the API 
  async function sendApiRequest(){
    let KEY = "9d2a9e92f8f64ecaba62837a16e0e56b"
    let response = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
  }
  
  //function that does something with the data received from the API.
  function useApiData(data){
    document.querySelector("#content").innerHTML += data.results[0].name
    document.querySelector("#content1").innerHTML += data.results[0].released
    document.querySelector("#content2").innerHTML += data.results[0].genres[0].name
    document.querySelector("#content3").innerHTML += data.results[0].metacritic
    document.querySelector("#content4").innerHTML += `<img src ="${data.results[0].short_screenshots[0].image}">`
  }