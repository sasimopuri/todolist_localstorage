window.onload=()=>{
    let getname= localStorage.getItem('username') || '';
    if(getname.length!=0)
    {
        changenamedom()
    }
    
}

let getinnername=document.querySelector(".input")
function addname(){
    getname=document.querySelector("#name")
    if(getname.value.length==0)
    {
        alert("Enter name")
    }
    else{
        localStorage.setItem('username',getname.value)
        getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getname.value}</span>
    </span>`
    }
}   

function changenamedom()
{
    let getnamels=localStorage.getItem("username")
    getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getnamels.toUpperCase()}</span>
    </span>`
}