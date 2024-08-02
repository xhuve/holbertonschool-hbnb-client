
async function fetchPlaces(token) {
  try {
    const result = await fetch("http://127.0.0.1:5000/places", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })

    const placesData = await result.json()
  
    return placesData
  } catch (error) {
    alert("Problem occured while loading places")    
  }
}

export default fetchPlaces