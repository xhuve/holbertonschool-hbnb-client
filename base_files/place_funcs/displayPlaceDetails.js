import createElementWithText from "../utils/createElementwithText.js"

export default function displayPlaceDetails(place) {
    console.log("🚀 ~ displayPlaceDetails ~ place:", place)
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
