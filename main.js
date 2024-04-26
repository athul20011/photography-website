let scrollContainer =document.querySelector(".gallery");
let backbtn =document.getElementById("backbtn");
let nextbtn =document.getElementById("nextbtn");

//  scrollContainer.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltay;
//  })
 nextbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollleft +=900;
 });
 backbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollleft +=900;
 })