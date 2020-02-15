  function Addbtn(){
    var userInput = document.getElementById('userinput');
    var userText = document.createTextNode(userInput.value);
    var li = document.createElement('li');
    var ol = document.getElementById('display');
    var p = document.createElement('p');
    var button = document.createElement('button')
    var btnText = document.createTextNode('Edit')
    var doneBtn= document.createElement("button")
    var doneText = document.createTextNode('Done');
    doneBtn.appendChild(doneText)
    button.appendChild(btnText);
    button.setAttribute('onClick',"edit(this.parentElement.id)")
    doneBtn.setAttribute('onClick','compelet(this.parentElement.id)')
    p.appendChild(userText);
    li.appendChild(p)
    li.appendChild(button)
    li.appendChild(doneBtn)
    ol.appendChild(li)
    li.setAttribute('id',userInput.value)
   

    userInput.value = "";
}
function compelet(id){
    var li = document.getElementById(id)
    li.className = 'compeleted'
    li.childNodes[1].remove()
    li.childNodes[1].setAttribute('onClick','delet(this.parentElement.id)')
}
function delet(id){
    var li = document.getElementById(id)
    li.className = 'red'
    setTimeout(()=>{
        li.remove()
    },1000)
}
function edit(id){
    var li = document.getElementById(id)
    var p = li.firstChild
    var pText = p.textContent
    console.log()  
    var input = document.createElement('input')
    input.value = pText
    li.replaceChild(input,p)
    li.childNodes[1].setAttribute('onClick','update(this.parentElement.id)') 
    li.childNodes[2].innerHTML = 'Cancel'
    li.childNodes[1].innerHTML = 'Done'
}
function update(id) {
    var li = document.getElementById(id)
    var input = li.firstChild
    var p = document.createElement('p')
    var text = document.createTextNode(input.value)
    p.appendChild(text)
    li.replaceChild(p,input)
    li.childNodes[2].innerHTML = 'Done'
    li.childNodes[1].setAttribute('onClick','edit(this.parentElement.id)')
    li.childNodes[1].innerHTML = 'Edit' 
}