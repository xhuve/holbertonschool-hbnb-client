import fetchPlaces from "../place_funcs/fetchPlaces.js";
import getCookie from '../utils/getCookie.js'
  
export default async function checkAuthentication() {
  const token = getCookie('jwt');

  console.log("🚀 ~ checkAuthentication ~ token:", token)
  const loginLink = document.getElementById('login-link');

  if (token) {
      loginLink.style.display = 'none';
      // Fetch places data if the user is authenticated
      return await fetchPlaces(token);
  } else {
    return new Error("Authentication problem")
}}