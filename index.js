let namehtml=document.querySelector(".name");
let taskinput=document.querySelector("#taskinput");
let tasks = JSON.parse(localStorage.getItem('task')) || [];
let ultag = document.querySelector('ul')
window.onload=()=>{
    let username = localStorage.getItem('username');
    if(username!=null){
        changenamedom(username);
    }

    if(tasks!=null)
    {
        tasks.forEach(task => {
            changetaskdom(task)
        });
        
    }
}


function addname()
{
    let usernameentered=document.querySelector("#name").value;
    if(usernameentered.length==0)
    {
        alert("Please enter your name");
    }
    else{
        localStorage.setItem('username',usernameentered);
    changenamedom(usernameentered);
    }
    
}

function changenamedom(username){
    namehtml.innerHTML=`<span><h1>Hey!!</h1></span><span class="namels"><h1>${username.charAt(0).toUpperCase()+username.slice(1)}</h1></span>`
}

function addtask()
{
    if(taskinput.value.length==0)
    {
        alert("Enter task")
    }
    else{
        let taskid=tasks.length+1;
        let checkedtask=false
        let newtaskobj={'task':taskinput.value,'taskid':taskid,'checkedtask':checkedtask};
         tasks.push(newtaskobj);
         localStorage.removeItem('task');
         console.log(tasks);
         taskinput.value='';
         localStorage.setItem('task',JSON.stringify(tasks));
        changetaskdom(newtaskobj);
    }
}

function changetaskdom(newtask){
    let taskliid="taskli"+newtask.taskid;
    let taskli=document.createElement("li");
    let taskid=newtask.taskid;
    taskli.id=taskliid;
    taskli.classList.add('list')
    ultag.appendChild(taskli);

    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("checkbox")
    let checkboxid='checkbox'+newtask.taskid;
    checkbox.id=checkboxid;
    taskli.appendChild(checkbox);
    

    let label=document.createElement("label");
    label.setAttribute("for",'checkbox'+newtask.taskid);
    let labelid='label'+newtask.taskid;
    label.id=labelid;
    label.classList.add('label')
    label.textContent=newtask.task;
    taskli.appendChild(label)
    if(newtask.checkedtask)
    {
        label.classList.add("checked");
        checkbox.checked=true
    }
    checkbox.onclick=()=>{changechecklist(labelid,taskid)}

    let deleteiconContainer = document.createElement("div");
    deleteiconContainer.classList.add("delete-icon-container");
    taskli.appendChild(deleteiconContainer);
    let deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-symbols-outlined"); 
    deleteIcon.id='delete' 
    deleteIcon.textContent=("delete")
    deleteIcon.onclick=()=>{
        ondelete(taskliid)
    }
    deleteiconContainer.appendChild(deleteIcon);
//     ultag.innerHTML+=`<li class="${taskliid} list" id="taskli+uniqueid">
//     <input type="checkbox" id="${'checkbox'+uniqueid}" class="checkbox">
//     <label for="${taskid}" class="label">${newtask.task}</label>
// </li>`

}

function changechecklist(labelid,taskid)
{
    let litag=document.getElementById(labelid);
    litag.classList.toggle("checked")
    let taskindex=tasks.findIndex((task)=>
    {
        if(task.taskid==taskid){
            return true
        }
        else{
            return false
        }
    })
    let selectedtask= tasks[taskindex];
    if(selectedtask.checkedtask===false){
        selectedtask.checkedtask=true;
    }
    else{
        selectedtask.checkedtask=false;
    }
    tasks[taskindex]=selectedtask;  
    localStorage.setItem('task',JSON.stringify(tasks))
    
}

function ondelete(taskid){
    let todoItem = document.getElementById(taskid);
    console.log(todoItem);
    ultag.removeChild(todoItem);

    let deleteElementIndex = tasks.findIndex(function(eachTodo) {
        let eachTodoId = "task" + eachTodo.taskid;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    tasks.splice(deleteElementIndex, 1);
}