const iframeContainer = document.querySelector('.iframe-cv-container')
const cookieCard = document.querySelector(".cookie-card-container");
const btnAcceptCookies = document.querySelector(".accept")

const linkCvIframe = "https://www.canva.com/design/DAGq53ZgUrk/8lRVVfkd-R4BLCxKs4hqvA/view?embed"

window.addEventListener("load", function(){
  const cookiesAccepted = localStorage.getItem('usr-accept-cookies') === "true";

  if(cookiesAccepted){
    iframeContainer.style.display = "block"
    cookieCard.style.display = "none"
    
    const iframe = document.createElement("iframe")
    iframe.src = linkCvIframe
    iframe.loading = "lazy"
    iframe.allowfullscreen = "allowfullscreen"
    iframe.allow="fullscreen"
    iframe.style.position = "absolute"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.border = "none"
    iframe.style.padding = "0"
    iframe.style.margin = "0"

    iframeContainer.appendChild(iframe)
  }
  else{
    iframeContainer.style.display = "none"
  }
})

btnAcceptCookies.addEventListener('click', function () {
    iframeContainer.style.display = "block"
    cookieCard.style.display = "none"

    const iframe = document.createElement("iframe")
    iframe.src = linkCvIframe
    iframe.loading = "lazy"
    iframe.allowfullscreen = "allowfullscreen"
    iframe.allow="fullscreen"
    iframe.style.position = "absolute"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.border = "none"
    iframe.style.padding = "0"
    iframe.style.margin = "0"

    iframeContainer.appendChild(iframe)

    if(iframeContainer.style.display === "block" && cookieCard.style.display === "none"){
        localStorage.setItem('usr-accept-cookies', 'true')
    }
})