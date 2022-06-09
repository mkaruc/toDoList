const addItem=document.getElementById("listBlank");
const dateInfo=document.getElementById("dateTime");
const addButton=document.getElementById("submitButton");
let done=0;
let removed=0;
const toDoList = document.getElementsByTagName("LI");

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("listBlank").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("lists").appendChild(li);
    }
    document.getElementById("listBlank").value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);
  
    
  }
for (i = 0; i < toDoList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(txt);
  toDoList[i].appendChild(span);
}
//remove
const remove = document.getElementsByClassName("remove");
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
  const div = this.parentElement;
  div.style.display = "none";
}
}
//check
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// txt.style.backGround.