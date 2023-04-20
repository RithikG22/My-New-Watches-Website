const imageSelector = document.querySelectorAll(".img-box");
const mainImage = document.querySelector(".main-image-element");
let incrementEl = document.querySelectorAll(".increase");
let quantityElem = document.querySelectorAll(".quantity");
let mainPriceElem = document.querySelectorAll(".main-price");
let realPrice = document.querySelectorAll(".strike");
let maincost = 250.00;
let realPricecost = 500.00;
let count = 1;
quantityElem[0].innerText = 1;
imageSelector.forEach((imagesAll, index)=>{
    imagesAll.addEventListener("click",()=>{
        mainImage.src = `${index}.jpg`; 
    })
})
function quantity(){
    count+=1   
    quantityElem[0].innerText = count;
}
function quanDecrease(){
    if(count<1){
        count +=1 
        quantityElem[0].innerText = count;
    }else if(count>1){
        count--
        quantityElem[0].innerText = count;
    }
    
} 
incrementEl[0].addEventListener('click',()=>{
    quanDecrease()
    mainPriceChange()
})
incrementEl[1].addEventListener('click',()=>{
    quantity()
    mainPriceChange()
})
function mainPriceChange(){
    let finalPrice = maincost * count
    mainPriceElem[0].innerText = `$${finalPrice}.00`;
    let realPriceS = realPricecost * count;
    realPrice[0].innerText = `$${realPriceS}.00`;
}
document.querySelector(".bx-menu").addEventListener("click",()=>{
    let navBar = document.querySelector(".nav-list")
    navBar.classList.add("nav-list-active")
})
document.querySelector(".bx-x").addEventListener("click",()=>{
    let navBar = document.querySelector(".nav-list")
    navBar.classList.remove("nav-list-active")
})