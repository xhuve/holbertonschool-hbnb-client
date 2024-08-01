import createElementWithText from "../utils/createElementwithText.js"

export default function displayPlaceDetails(place) {
    console.log("🚀 ~ displayPlaceDetails ~ place:", place)
    // <h1 class="place-name">Place Name</h1>
    // <img src="#" alt="place image" class="place-image-large">
    // <div class="place-info">
    //     <p><b>Host:</b> Name</p>
    //     <p><b>Price per night:</b> 100$</p>
    //     <p><b>Description:</b> A beautiful blank</p>
    //     <p><b>Amenities:</b> 1 2 3</p>
    // </div>
    const place_details = document.getElementById("place-details")

    place_details.innerHTML = ""

    place_details.appendChild(createElementWithText("h1", place.name))
    const place_info = createElementWithText("div")
    place_info.classList.add("place-info")

    const contentArray = [
        { label: "Host:", value: place.host_name },
        { label: "Price per night:", value: `${place.price_per_night}$` },
        { label: "Location:", value: `${place.country_name}, ${place.city_name}` },
        { label: "Description:", value: place.description },
        { label: "Amenities:", value: place.amenities.join(", ") }
    ];

    contentArray.forEach(content => {
        let paragraph = createElementWithText("p")
        paragraph.innerHTML = `<b>${content.label}</b> ${content.value}`
        place_info.appendChild(paragraph);
    });

    place_details.append(place_info)
}
