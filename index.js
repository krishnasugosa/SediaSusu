const tg1 = document.getElementById("tg1");
const tg2 = document.getElementById("tg2");
const show1 = document.getElementById("ul-nav");

tg1.onclick = function(){
    tg1.style.display = "none"
    tg2.style.display = "block"
    show1.style.left = -18 + "%"
    show1.style.transition = "1s ease-in"
}

tg2.onclick = function(){
    tg1.style.display = "block"
    tg2.style.display = "none"
    show1.style.left = -90 + "%"
}