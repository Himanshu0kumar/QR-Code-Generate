let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    // it is an api to convert any text into QR code 
    if(qrText.value.length >0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x15& data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}