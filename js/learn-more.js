const btnLearnMore = document.querySelector(".learn-more");

btnLearnMore.addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "https://www.canva.com/design/DAGgRd9z7Xw/EsA79i1miKAPqyTClDNZFg/view?utm_content=DAGgRd9z7Xw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"; // URL du fichier à télécharger
    link.target = "_blank"
    link.rel = "noopener"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})