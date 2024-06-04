let qrText = document.querySelector(".intext");
let imgBox = document.querySelector(".imgBox");
let qrImg = document.querySelector(".qrImg");
let button = document.querySelector(".but");


button.addEventListener("click" , () => {
    if(qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        } , 1000);
    }
})