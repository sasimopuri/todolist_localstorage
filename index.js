window.onload=()=>{
    let getname= localStorage.getItem('username') || '';
    if(getname.length!=0)
    {
        changenamedom();
    }

    let tasks= JSON.parse(localStorage.getItem('task')) || [];
    if(tasks.length!=0)
    {
        display(tasks);
    }
    
}

let getinnername=document.querySelector(".input");
let displayhtml=document.querySelector("ul").innerHTML;
function addname(){
    getname=document.querySelector("#name");
    if(getname.value.length==0)
    {
        alert("Enter name");
    }
    else{
        localStorage.setItem('username',getname.value);
        getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getname.value}</span>
    </span>`;
    }
}   

function changenamedom()
{
    let getnamels=localStorage.getItem("username");
    getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getnamels.toUpperCase()}</span>
    </span>`;
}

function display(tasks)
{
    tasks.forEach(task => {
        displayhtml+=`<li>${task.task}</li>`
    });
}

function addtask(){
    let taskentered=document.querySelector("#enteredtask")
    if(taskentered.value.length==0){
        alert("Please enter task")
    }
    let tasks= JSON.parse(localStorage.getItem('task')) || [];
    console.log(tasks.length);
    if(tasks.length==0){
        localStorage.setItem('task',taskentered.value)
    }
    else
    {
        console.log('else');
    localStorage.setItem('task',JSON.stringify([JSON.parse(localStorage.getItem('task')),{'task':taskentered.value}]))
}
    
}

        