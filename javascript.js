function addnewTask() 
{
    let ul = document.getElementById("tasklist");

    let li = document.createElement("li");

    let p = document.createElement("p");
    p.setAttribute("id", "mytasktext");
    let addnewtodo = document.getElementById("addnewtodo").value;
    let item = document.createTextNode(addnewtodo);

    p.innerHTML = addnewtodo;
    p.style.display = 'inline-block';

    let deleteBut = document.createElement("button");
    deleteBut.setAttribute("onclick", "taskdone()");
    deleteBut.setAttribute("class", "mydelbutton");
    deleteBut.innerHTML = "Delete";

    let mycheckBox = document.createElement("input");
    mycheckBox.setAttribute("type", "checkbox");
    mycheckBox.setAttribute("id", "checkboxing");

    li.appendChild(mycheckBox);
    li.appendChild(p);
    li.appendChild(deleteBut);
    
    document.getElementById("tasklist").appendChild(li);
    document.getElementById("addnewtodo").value = "";
}

function taskdone() 
{
    let taskdel = document.getElementsByClassName("mydelbutton");
    for (i = 0; i < (taskdel.length); i++) 
    {
        taskdel[i].onclick = function() 
        {
            let myelement = this.parentElement;
            myelement.style.display = "none";
        }
    }
}
