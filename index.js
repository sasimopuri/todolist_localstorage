window.onload=()=>{
    let getnamels=localStorage.getItem('username') || [];
    if(getnamels.length!=0)
    {
        changenamedom(getnamels); 
    }
    let task=localStorage.getItem('tasks')
    console.log(task)
    if(task!=null)
    {
        console.log('dasd');
        let tasks=JSON.parse(localStorage.getItem('tasks'))
        displaytasks();
    }

}
let getinnername=document.querySelector(".input");
function changenamedom(getnamels)
{
    getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getnamels.toUpperCase()}</span>
    </span>`;
}

function addname()
{
    let getnameinput=document.querySelector("#name").value;
    console.log(getinnername,'s')
    if(getnameinput.length==0)
    {
        alert("please enter name");
    }
    else{
        localStorage.setItem("username",getnameinput);
        getinnername.innerHTML=`<span class="greeting">
        Hey!! <span class="nameis">${getnameinput.toUpperCase()}</span>
    </span>`;
    }

}

function addtask()
{
    let enteredtask=document.querySelector("#enteredtask").value;
    let tasks=JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks)
    if(tasks==null){
        localStorage.setItem('tasks',JSON.stringify([{'task':enteredtask}]));
    }
    else{
        localStorage.setItem('tasks',JSON.stringify([...JSON.parse(localStorage.getItem('tasks')),{'task':enteredtask}]))
    }
}
window.onchange=displaytasks;
function displaytasks(){
    let addtaskdom=document.querySelector(".display");
    let tasks=JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(task => {
        console.log(task.task)
        addtaskdom.innerHTML+=`<li><span class="displaytask">${task.task}</span>
        <span class="delete" onclick="delete(this)">Delete</span></li>`
    });

}

