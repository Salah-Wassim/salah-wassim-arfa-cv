const iframeContainer = document.querySelector('.iframes-news')
const messageNewsCookie = document.querySelector('.wrng-news')

const linkedinIframes = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7401730354862145536?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7320714470090055681?collapsed=1"
]

window.addEventListener("load", function(){
  const cookiesAccepted = localStorage.getItem('usr-accept-cookies') === 'true'

  if(cookiesAccepted){
    iframeContainer.style.display = "flex"
    messageNewsCookie.textContent = ""
    messageNewsCookie.style.display = "none"

    linkedinIframes.forEach(src => {
      const iframe = document.createElement('iframe')
      iframe.src = src
      iframe.loading = "lazy"
      iframe.width = "504"
      iframe.height = "525"
      iframe.frameBorder = "0"
      iframe.title = "Post intégré"
      iframe.style.border = "none"
    
      iframeContainer.appendChild(iframe)
    })
  }
  else{
    iframeContainer.style.display = "none"
    const link = this.document.createElement("a")
    link.href="../index.html"
    link.textContent="acceptation des cookies tiers."

    messageNewsCookie.textContent = "Contenu masqué pour des raisons de confidentialité. L’affichage des articles nécessite l’"
    messageNewsCookie.append(link)
  }
})