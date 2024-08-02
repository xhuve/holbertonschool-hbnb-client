import renderAllPlaces from "./renderPlaces.js";


function displayPlaces(places, placesElement) {
    const countryFilter = document.getElementById('country-filter')
    countryFilter.addEventListener('change', (e) => {
      const country = countryFilter.value;
      const filteredPlaces = places.filter((place) => place.country_name == country)

      renderAllPlaces(filteredPlaces, placesElement)
    });

    renderAllPlaces(places, placesElement)
  }

export default displayPlaces