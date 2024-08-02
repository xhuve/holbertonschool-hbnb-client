async function fetchPlaceDetails(token) {
    const placeId = location.search.substring(1)

    try {
        const response = await fetch(`http://127.0.0.1:5000/places/${placeId}`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })
    
        const placeData = await response.json()
        return placeData
    } catch (error) {
        alert("Problem occured while loading places")    
    }
}

export default fetchPlaceDetails