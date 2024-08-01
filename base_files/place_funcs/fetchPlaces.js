
async function fetchPlaces(token) {
    const result = await fetch("http://127.0.0.1:5000/places", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    const data = await result.json()
  
    return data
}

export default fetchPlaces