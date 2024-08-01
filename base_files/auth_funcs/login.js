async function handleLoginSubmit(e) {
    e.preventDefault()
    const email = document.getElementsByClassName("login-input")[0].value
    const password = document.getElementsByClassName("login-input")[1].value

    try {
      const result = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
      })
      console.log(result)
      if (!result.ok) {
        throw new Error('Network response was not ok ' + result.statusText);
      }
      const content = await result.json()
      
      document.cookie = `jwt=${content.access_token}`
      window.location.replace("index.html")
    } catch (error) {
      alert(error)
    }
  }

export default handleLoginSubmit