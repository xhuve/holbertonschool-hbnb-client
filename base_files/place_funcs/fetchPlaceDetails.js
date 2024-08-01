async function fetchPlaceDetails(token) {
    const placeId = location.search.substring(1)

    const response = await fetch(`http://127.0.0.1:5000/places/${placeId}`, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    })

    const placeData = await response.json()
    return placeData
}

export default fetchPlaceDetails