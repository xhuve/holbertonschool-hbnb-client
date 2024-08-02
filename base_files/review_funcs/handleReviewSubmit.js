import getCookie from "../utils/getCookie.js"

export default async function handleReviewSubmit(e) {
    e.preventDefault()
    const placeId = document.getElementById("review-place")
    const reviewText = document.getElementById("review-desc")
    const reviewRating = document.getElementById("review-rating")
    const token = getCookie('jwt');
    const formData = new FormData()

    try {
        formData.append("placeId", placeId.value)
        formData.append("reviewDesc", reviewText.value)
        formData.append("reviewRating", reviewRating)

        console.log("🚀 ~ handleReviewSubmit ~ formData:", formData.get("placeId"))
        const response = await fetch(`http://127.0.0.1:5000/places/${formData.get('placeId')}/reviews`, {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: formData.get('reviewDesc'),
                rating: formData.get("reviewRating")
            })
        })
        if (!response.ok) {
            throw new Error("Problem with submitting review " + response.statusText)
        } else {
            placeId.value = ""
            reviewText.value = ""

        }
        
    } catch (error) {
        alert(error)
    }
}