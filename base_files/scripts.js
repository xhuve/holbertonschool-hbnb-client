import handleLoginSubmit from './auth_funcs/login.js'
import checkAuthentication from './auth_funcs/checkAuthentication.js'
import displayPlaces from './place_funcs/displayPlaces.js'
import fetchPlaceDetails from './place_funcs/fetchPlaceDetails.js'
import fetchPlaces from './place_funcs/fetchPlaces.js'
import getCookie from './auth_funcs/checkAuthentication.js'
import displayPlaceDetails from './place_funcs/displayPlaceDetails.js'
import handleReviewSubmit from './review_funcs/handleReviewSubmit.js'

document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const placesList = document.getElementById("places-list")
  const placePage = document.getElementById("place-page")
  const reviewForm = document.getElementById("review-form")
  const token = getCookie('jwt');

  if (placesList){
    try {
      await checkAuthentication()
      const placesData = await fetchPlaces(token); 
      displayPlaces(placesData, placesList)

    } catch (error) {
      console.log(error)
    }
  }

  if (placePage){
    await checkAuthentication()
    const placeData = await fetchPlaceDetails(token)
    displayPlaceDetails(placeData)
  }

  if(loginForm){
    loginForm.addEventListener("submit", handleLoginSubmit)
  }

  if (reviewForm) {
    await checkAuthentication()
    reviewForm.addEventListener("submit", handleReviewSubmit)
  }

})
