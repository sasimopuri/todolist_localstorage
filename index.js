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
    var taskliid='taskli'+newtask.taskid;
    let taskid='task'+newtask.taskid;
    ultag.innerHTML+=`<li class="${taskliid} list" style="margin-top:10px">
    <input type="checkbox" name="${taskid}" id="${'checkbox'+taskid}" class="checkbox"  onclick="changechecklist(taskid)">
    <label for="${taskid}" class="${taskid}">${newtask.task}</label>
</li>`

}

function changechecklist(s)
{
    console.log(s);
}