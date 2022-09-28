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
  
  //function that retrieves the 1st game data received from the API.
  function useApiData(data){
    document.querySelector("#content").innerHTML += data.results[0].name
    document.querySelector("#contenta").innerHTML += data.results[0].released
    document.querySelector("#contentb").innerHTML += data.results[0].genres[0].name
    document.querySelector("#contentc").innerHTML += data.results[0].metacritic
    document.querySelector("#contentd").innerHTML += `<img src ="${data.results[0].short_screenshots[0].image}">`
    document.querySelector("#contente").innerHTML += data.results[1].name
    document.querySelector("#contentf").innerHTML += data.results[1].released
    document.querySelector("#contentg").innerHTML += data.results[1].genres[0].name
    document.querySelector("#contenth").innerHTML += data.results[1].metacritic
    document.querySelector("#contenti").innerHTML += `<img src ="${data.results[1].short_screenshots[0].image}">`
    document.querySelector("#contentj").innerHTML += data.results[16].name
    document.querySelector("#contentk").innerHTML += data.results[16].released
    document.querySelector("#contentl").innerHTML += data.results[16].genres[0].name
    document.querySelector("#contentm").innerHTML += data.results[16].metacritic
    document.querySelector("#contentn").innerHTML += `<img src ="${data.results[16].short_screenshots[0].image}">`
    document.querySelector("#contento").innerHTML += data.results[11].name
    document.querySelector("#contentp").innerHTML += data.results[11].released
    document.querySelector("#contentq").innerHTML += data.results[11].genres[0].name
    document.querySelector("#contentr").innerHTML += data.results[11].metacritic
    document.querySelector("#contents").innerHTML += `<img src ="${data.results[11].short_screenshots[0].image}">`
    document.querySelector("#contentt").innerHTML += data.results[10].name
    document.querySelector("#contentu").innerHTML += data.results[10].released
    document.querySelector("#contentv").innerHTML += data.results[10].genres[0].name
    document.querySelector("#contentw").innerHTML += data.results[10].metacritic
    document.querySelector("#contentx").innerHTML += `<img src ="${data.results[10].short_screenshots[0].image}">`
    document.querySelector("#contenty").innerHTML += data.results[3].name
    document.querySelector("#contentz").innerHTML += data.results[3].released
    document.querySelector("#contentaa").innerHTML += data.results[3].genres[0].name
    document.querySelector("#contentbb").innerHTML += data.results[3].metacritic
    document.querySelector("#contentcc").innerHTML += `<img src ="${data.results[3].short_screenshots[0].image}">`
  } 
