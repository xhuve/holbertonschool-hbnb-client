/* 
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  if(loginForm){
    loginForm.addEventListener("submit", async (e) => {
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
          throw new Error('Network response was not ok ' + resykt.statusText);
        }
        const content = await result.json()
        
        document.cookie = `jwt=${content.access_token}`
        window.location.replace("index.html")
      } catch (error) {
        alert(error)
      }
    })
  }
});

