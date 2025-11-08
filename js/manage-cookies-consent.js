const iframeContainer = document.querySelector('.iframe-cv-container')
const cookieCard = document.querySelector(".cookie-card-container");
const btnAcceptCookies = document.querySelector(".accept")

window.addEventListener("load", function(){
  if(this.localStorage.getItem('usr-accept-cookies', 'true')){
    iframeContainer.style.display = "block"
    cookieCard.style.display = "none"
  }
})

btnAcceptCookies.addEventListener('click', function () {
    iframeContainer.style.display = "block"
    cookieCard.style.display = "none"

    if(iframeContainer.style.display === "block" && cookieCard.style.display === "none"){
        localStorage.setItem('usr-accept-cookies', 'true')
    }
})