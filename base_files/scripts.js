import handleLoginSubmit from './auth_funcs/login.js'
import checkAuthentication from './auth_funcs/checkAuthentication.js'
import displayPlaces from './place_funcs/displayPlace.js'

document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const placesList = document.querySelector("#places-list")
 
  if (placesList){
    let placesData = await checkAuthentication()
    displayPlaces(placesData, placesList)
  }
  
  if(loginForm){
    loginForm.addEventListener("submit", handleLoginSubmit)
  }
  
})  

