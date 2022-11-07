const big = document.querySelector(".big")
const small = document.querySelector(".small")
let a = 0

small.addEventListener("click",(e)=>{
if(e.pointerType == "mouse"){
    small.style.left =`${a}px`
    a+=10
}

})