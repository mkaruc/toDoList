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
  
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
        done--;
        removed++;
        removeRate.innerHTML=removed;
        yRemove=removed;
        const xValues = [ "Canceled"];
const yValues = [ yRemove];
const barColors = [ "red"];
new Chart("myRemoveChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {}
});
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
     const xValues = ["Done"];
     const yValues = [yDone,];
     const barColors = ["green"];
     new Chart("myDoneChart", {
       type: "bar",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {}
     });
  }
}, false);
//reting panel
const doneRate=document.getElementById("doneRate");

const removeRate=document.getElementById("removed");

