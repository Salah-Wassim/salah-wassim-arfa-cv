const btnContact = document.querySelector(".btn-contact");

btnContact.addEventListener("click", function(){
    const aElement = document.createElement("a");
    aElement.href = "voir-plus/contact.html";
    aElement.rel = "noopener";
    document.body.appendChild(aElement)
    aElement.click();
    document.body.removeChild(aElement)
})