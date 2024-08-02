import getCookie from '../utils/getCookie.js'
  
export default async function checkAuthentication() {
  const token = getCookie('jwt');
  
  const addReviewSection = document.getElementById("add-review")
  const loginLink = document.getElementById('login-link');

  if (token) {
      if (addReviewSection)
        addReviewSection.style.display = 'block';

      loginLink.style.display = 'none';
  } else {
    if (addReviewSection)
      addReviewSection.style.display = 'none';

}}