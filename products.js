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
  } 

  /* let searchButton = document.querySelector("#search1")

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
    document.querySelector("#contente").innerHTML += data.results[1].name
    document.querySelector("#contentf").innerHTML += data.results[1].released
    document.querySelector("#contentg").innerHTML += data.results[1].genres[0].name
    document.querySelector("#contenth").innerHTML += data.results[1].metacritic
    document.querySelector("#contenti").innerHTML += `<img src ="${data.results[1].short_screenshots[0].image}">` */
  }
  
  let searchButton = document.querySelector("#search2")

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
    document.querySelector("#contentj").innerHTML += data.results[2].name
    document.querySelector("#contentk").innerHTML += data.results[2].released
    document.querySelector("#contentl").innerHTML += data.results[2].genres[0].name
    document.querySelector("#contentm").innerHTML += data.results[2].metacritic
    document.querySelector("#contentn").innerHTML += `<img src ="${data.results[2].short_screenshots[0].image}">`
  }
  
  let searchButton = document.querySelector("#search3")

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
    document.querySelector("#contento").innerHTML += data.results[3].name
    document.querySelector("#contentp").innerHTML += data.results[3].released
    document.querySelector("#contentq").innerHTML += data.results[3].genres[0].name
    document.querySelector("#contentr").innerHTML += data.results[3].metacritic
    document.querySelector("#contents").innerHTML += `<img src ="${data.results[3].short_screenshots[0].image}">`
  }
  
  let searchButton = document.querySelector("#search4")

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
    document.querySelector("#contentt").innerHTML += data.results[4].name
    document.querySelector("#contentu").innerHTML += data.results[4].released
    document.querySelector("#contentv").innerHTML += data.results[4].genres[0].name
    document.querySelector("#contentw").innerHTML += data.results[4].metacritic
    document.querySelector("#contentx").innerHTML += `<img src ="${data.results[4].short_screenshots[0].image}">`
  } */