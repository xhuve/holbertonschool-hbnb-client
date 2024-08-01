import renderAllPlaces from "./renderPlaces.js";


function displayPlaces(places, placesElement) {
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
      renderAllPlaces(filteredPlaces, placesElement)
    });
    renderAllPlaces(places, placesElement)
  }

export default displayPlaces