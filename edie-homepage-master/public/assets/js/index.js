const open=document.getElementById("menu");

const close=document.getElementById("close");

const nav=document.getElementById("navs");

let ul=document.getElementById("ul");

console.log(ul);

open.addEventListener("click", function(){
    ul.style.right="0px";
})

close.addEventListener("click", function(){
    ul.style.right="-300px";
})