// ==========================
// KAI GAME STORE - script.js
// ==========================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 800);
});

// Popup Elements
const popup = document.getElementById("popup");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const qr = document.getElementById("qr");

// Open Popup
function openPay(name, price){

    itemName.innerText = name;
    itemPrice.innerText = price;

    qr.src = "images/kpay.jpg";

    popup.style.display = "flex";

}

// Close Popup
function closePay(){

    popup.style.display = "none";

}

// KBZ QR
function showKBZ(){

    qr.src = "images/kpay.jpg";

}

// Wave QR
function showWave(){

    qr.src = "images/wave.jpg";

}

// Copy Number
function copyNumber(){

    navigator.clipboard.writeText("09890522160")
    .then(() => {

        alert("Phone Number Copied!");

    });

}

// Hero Button Scroll
function scrollGold(){

    document.getElementById("gold")
    .scrollIntoView({
        behavior:"smooth"
    });

}

// Close when click outside
window.onclick = function(e){

    if(e.target === popup){

        closePay();

    }

}

// ESC Key Close
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePay();

    }

});

// Button Click Effect
document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.95)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },120);

    });

});