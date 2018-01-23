
let body=document.querySelector('body')
let buttn=document.createElement('a');
buttn.innerHTML="OK";
buttn.addEventListener("click",()=>{
   buttn.style.backgroundColor="blue";

})
body.appendChild(buttn);
