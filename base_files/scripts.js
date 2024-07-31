/* 
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const placesList = document.querySelector("#places-list")
 
  if (placesList){
    checkAuthentication()  
  }
  
  if(loginForm){
    loginForm.addEventListener("submit", handleLoginSubmit)
  }
  
  async function handleLoginSubmit(e) {
    e.preventDefault()
    const email = document.getElementsByClassName("login-input")[0].value
    const password = document.getElementsByClassName("login-input")[1].value

    try {
      const result = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
      })
      console.log(result)
      if (!result.ok) {
        throw new Error('Network response was not ok ' + result.statusText);
      }
      const content = await result.json()
      
      document.cookie = `jwt=${content.access_token}`
      window.location.replace("index.html")
    } catch (error) {
      alert(error)
    }
  }

  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  function checkAuthentication() {
    const token = getCookie('jwt');
    console.log(token)
    const loginLink = document.getElementById('login-link');
  
    if (token) {
        loginLink.style.display = 'none';
        // Fetch places data if the user is authenticated
        fetchPlaces(token);
    } else {
      return
  }}
  
  function renderAllPlaces(places) {
    placesList.innerHTML = '';
    places.forEach(place => {
      const listElement = document.createElement("li")
      const placePrice = createElementWithText("p", `${place.price_per_night} $`)
      const placeLocation = createElementWithText("p", `${place.country_name}, ${place.city_name}`)
      const placeDesc = createElementWithText("p", place.description)
      const viewDetails = createElementWithText("button", "View Details")
      viewDetails.classList.add('details-button')
  
      listElement.appendChild(placePrice)
      listElement.appendChild(placeLocation)
      listElement.appendChild(placeDesc)
      listElement.append(viewDetails)
    
      listElement.classList.add("place-cards")
        placesList.appendChild(listElement)
    });
  }
  
  async function fetchPlaces(token) {
    const result = await fetch("http://127.0.0.1:5000/places", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    const data = await result.json()
    console.log("🚀 ~ fetchPlaces ~ data:", data)
  
    displayPlaces(data)
  }
  
  function createElementWithText(type, textContent="") {
    const element = document.createElement(type);
    element.textContent = textContent;
    return element;
  }
  
  function displayPlaces(places) {
    // <img src="#" alt="place image" class="place-image">
    // <h3 class="place-name">Name: </h3>
    // <p>Price per night: </p>
    // <p>Location: </p>
    // <button class="details-button">View Details</button>
    const countryFilter = document.getElementById('country-filter')
    countryFilter.addEventListener('change', (e) => {
      console.log("first")
      const country = countryFilter.value;
      console.log("🚀 ~ displayPlaces ~ places:", places)
      console.log("🚀 ~ countryFilter.addEventListener ~ country:", country)
      const filteredPlaces = places.filter((place) => place.country_name == country)
      console.log("🚀 ~ countryFilter.addEventListener ~ places:", filteredPlaces)
      renderAllPlaces(filteredPlaces)
    });
    renderAllPlaces(places)
  }
})  

