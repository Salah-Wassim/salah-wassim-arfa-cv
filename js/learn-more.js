const btnLearnMore = document.querySelector(".learn-more");

btnLearnMore.addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "portfolio.html";
    link.rel = "noopener"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})