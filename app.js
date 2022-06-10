const addItem=document.getElementById("listBlank");
const dateInfo=document.getElementById("dateTime");
const addButton=document.getElementById("submitButton");
let done=0;
let removed=0;
let yDone=0;
let yRemove=0;
const toDoList = document.getElementsByTagName("LI");
const remove = document.getElementsByClassName("remove");
function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("listBlank").value;
    const t = document.createTextNode(inputValue);
    const dated = document.createTextNode(dateInfo.value+"  " );
    li.appendChild(dated);
    li.appendChild(t);
   


    if (inputValue === '' && dateInfo.value=== '') {
      alert("You cannot pass without writing some To Do Item and date time!");
    } else {
      document.getElementById("lists").appendChild(li);
    }
    document.getElementById("listBlank").value = "";
    document.getElementById("dateTime").value="";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
        done--;
        removed++;
        removeRate.innerHTML=removed;
        yRemove=removed;
        
      }
    }
  }
  //remove
for (i = 0; i < toDoList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(txt);
  toDoList[i].appendChild(span);
 
}


//check
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    done++;
     doneRate.innerHTML=done;
     yDone=done;
    
  }
}, false);
//reting panel
const doneRate=document.getElementById("doneRate");

const removeRate=document.getElementById("removed");
function alerting() {
  var x;
  if (confirm("Are you Sure? Because you will clear all items if you push OK button") == true) {
    window.location.reload();
  }
}
