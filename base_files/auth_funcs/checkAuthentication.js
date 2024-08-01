import fetchPlaces from "../place_funcs/fetchPlaces.js";

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
        return fetchPlaces(token);
    } else {
      return "error"
  }}

export default checkAuthentication