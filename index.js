let count=0;

let vechiInc=document.getElementById('vechicle-count');
console.log(vechiInc);
function increment(){

count+= 1;
vechiInc.innerText=count;

}


function save(){
let saveEl=document.getElementById('previous-el');
saveEl.textContent+=count+' - ';
count=0;
vechiInc.textContent=count;
}