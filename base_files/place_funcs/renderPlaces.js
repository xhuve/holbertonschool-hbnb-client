import createElementWithText from '../utils/createElementwithText.js'

function renderAllPlaces(places, placesList) {
    console.log(places)
    placesList.innerHTML = '';
    places.forEach(place => {
      const listElement = document.createElement("li")
      const placePrice = createElementWithText("p", `${place.price_per_night} $`)
      const placeLocation = createElementWithText("p", `${place.country_name}, ${place.city_name}`)
      const placeDesc = createElementWithText("p", place.description)
      const viewDetails = createElementWithText("button", "View place details")
      const link = createElementWithText("a")
      link.style.color = "white"
      link.href = `place.html?${place.id}`
      link.appendChild(viewDetails)

      viewDetails.classList.add('details-button')
  
      listElement.appendChild(placePrice)
      listElement.appendChild(placeLocation)
      listElement.appendChild(placeDesc)
      listElement.append(link)
    
      listElement.classList.add("place-cards")
      placesList.appendChild(listElement)
    });
  }

  export default renderAllPlaces