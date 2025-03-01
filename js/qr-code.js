const btnScanMe = document.querySelector(".btn-scan");
const qrCode = document.querySelector(".qr-code-section");
const qrCodeImg = document.querySelector(".qr-code-container-img");

btnScanMe.addEventListener("click", function(){
    qrCode.classList.toggle("qrCode-show");
    if(qrCode.classList.contains("qrCode-show")){
        qrCodeImg.style.display = "block"
    }
    else{
        qrCodeImg.style.display = "none"
    }
})