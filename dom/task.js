const Addbtn =  document.querySelector(".Addbtn");
const input =  document.querySelector(".input");
const container =  document.querySelector(".container");
class item{
    constructor(itemName){
this.createDiv(itemName);
}
createDiv(itemName){
let input = document.createElement("input");
input.value = itemName;
input.disabled= true;
input.classList.add("item_input");
input.type = "text";
let itemBox = document.createElement("div");
itemBox.classList.add("item");
let Editbtn = document.createElement("button");
Editbtn.innerHTML ="Edit"
Editbtn.classList.add("Editbtn");

let Removebtn = document.createElement("button");
Removebtn.innerHTML ="Remove"
Removebtn.classList.add("Removebtn");
container.appendChild(itemBox);
itemBox.appendChild(input);
itemBox.appendChild(Editbtn);
itemBox.appendChild(Removebtn);
Editbtn.addEventListener("click" ,( ) => this.Edit(input));
Removebtn.addEventListener("click" ,() =>this.Removebtn(itemBox));
}
edit(input){input.disabled =! input.disabled;}
}
remove(item)
{ container.removeChild(item);} 

function check(){
    if(input.value !=""){new item(input.value);
    input.value= ""}}
    Addbtn.addEventListener("click" , check);
    window.addEventListener("keydown" , (e) => {
        if(e.which==13){check();}
    })


    function Addbtn(){}