import handleLoginSubmit from './auth_funcs/login.js'
import checkAuthentication from './auth_funcs/checkAuthentication.js'
import displayPlaces from './place_funcs/displayPlace.js'
import fetchPlaceDetails from './place_funcs/fetchPlaceDetails.js'
import getCookie from './auth_funcs/checkAuthentication.js'
import displayPlaceDetails from './place_funcs/displayPlaceDetails.js'

document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const placesList = document.getElementById("places-list")
  const place_page = document.getElementById("place-page")
  const token = getCookie('jwt');

  if (placesList){
    try {
      const placesData = await checkAuthentication()
      displayPlaces(placesData, placesList)
      
    } catch (error) {
      console.log(error)
    }
  }

  if (place_page){
    const placeData = await fetchPlaceDetails(token)
    displayPlaceDetails(placeData)
  }

  if(loginForm){
    loginForm.addEventListener("submit", handleLoginSubmit)
  }
  
})
