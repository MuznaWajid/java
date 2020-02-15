function todoList() {
        var mainDiv = document.getElementById("userinput")
        if(mainDiv.value === ''){
            alert('cant add empty')
        }else{
            var text = document.createTextNode(mainDiv.value)
        var newItem = document.createElement("li")
        newItem.appendChild(text)
        // sb se pehle ik variable amin element create krein ge
        var delet = document.createElement('button')
        //us k bad button ka text node banye ge take buton pr kuch likha hoa aye 
        var del_txt  =document.createTextNode('Delete')
        // ab text ko button main append krein ge
        delet.appendChild(del_txt)
        // ab ik attribute lagaein ge on click ka k button click pr ik function call ho
        delet.setAttribute('onClick','delet(this.parentElement.id)'); //yaha hm onClick pr function call kr rahe hain q k ham ne in click pr li ko delte kr na hai
        // ab button ko li main append krein ge 
        newItem.appendChild(delet)
        // ab yaha ik button banao compelete k naeme se
       var compelete = document.createElement('button')
       var com_text = document .createTextNode('compelete')
       compelete.appendChild(com_text)
       compelete.setAttribute('onclick' , 'compelete')
       newItem.appendChild(compelete)
        var ul = document.getElementById("mylist")
        var editbtn = document.createElement('button')  //button banaya
        var editTxt = document.createTextNode('Edit')   //button k lia text banaya
        editbtn.appendChild(editTxt)                    //buuton main text insert kia
        editbtn.setAttribute('onClick','edit();')       //onClick ka attribute banaya jis se edit ka function call ho
        newItem.appendChild(editbtn)                    //button ko li mian append kr dia
        ul.appendChild(newItem)                         //li ko ul mian append kr dia
        newItem.setAttribute('id',mainDiv.value) //main input ko he id bana raha hn q k yaha input sb alag he hn gi assume krte hai sai  
        }

        mainDiv.value = ''
    }

// delete function senerio samgho hm ne button click pr wai li delete krna hai jo button ka parrent ho to pehle li ko ik id dete hain take unique rahe to 

function delet(id){
    var li = document.getElementById(id)
    console.log(li)
    li.remove()
}



//hogaya ya reh gaya kuch
//ul m append krna h ya nh nai q k li ul main aarai hai dekhi ye aese kam kr raha hai pehle text button's li mian arahe hai ur li ul min samghi
//koi sawal mne sahi kra h
//ha ik mistake thi ap ne append kia append child krna tha
//ok khn mainen update kr dia ab age barhe pehle delete option bante hain wo easy hai
//thk

    // ab dekho jaise ap ne li create kia hia weise hi do button bano ur li mian append kro ur li ko ul main apped kro 
    //kro aesa
    











    function addElement() {
        var mainDiv = document.getElementById("userinput").value;
        var newItem = document.createElement("div");
        var text = document.createTextNode(mainDiv);
        document.body.insertBefore(newItem,mainDiv);
        newItem.appendChild(text);
        if(mainDiv===""){
        alert("user this canot be empty")}
        else{document.getElementById("the-ul").appendChild(newItem);}
        mainDiv.value = ''
    }