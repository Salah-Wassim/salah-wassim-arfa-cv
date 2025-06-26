const btnDonwload = document.querySelector(".btn-download");

btnDonwload.addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "assets/CV_Salah-Wassim ARFA.pdf"; // URL du fichier à télécharger
    link.download = "CV_Salah-Wassim ARFA.pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})