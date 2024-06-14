let btnOpen = document.querySelector(".btnOpen");
let box = document.querySelector(".box");
let body = document.querySelector("body");//Note: this is not a class but a tage name. that is why it is not referenced with the "." sign
let close = document.querySelector(".close");
 btnOpen.addEventListener("click", ()=>{
   btnOpen.style.display="none";
   box.style.display="block";
   body.style.bacgroundColor="#222"
 });
 close.addEventListener("click", ()=>{
   btnOpen.style.display="block"
   box.style.display="none";
   body.style.bacgroundColor="#999";
 });