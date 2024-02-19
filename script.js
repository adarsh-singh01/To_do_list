let a;
let date;
let time;
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  
};

setInterval(() => {
  a = new Date();
  var time = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  document.getElementById("time").innerHTML =
    "Time : " + time + "<br> on " + date;
}, 1000);

const URL="http://api.weatherapi.com/v1/current.json?key=61450680bdfd45b099562828241702&q=New_Delhi"

function api(){
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{
    console.log(data.current.condition.text);
    //const weatherText = data.current.condition.text;
    const weatherIcon=`https:${data.current.condition.icon}`;
    //document.getElementById("weatherText").innerHTML = weatherText;
    document.getElementById("weatherIcon").setAttribute("src", weatherIcon);
  });
  
  
}
api();





const takenInput=document.getElementById("takenInput");
const listContainer=document.getElementById("list-container");
const button=document.querySelector("button");
document.addEventListener("keypress",function(event){
  if(event.key==="Enter"){
    add();
  }
});

function add() {
    if (takenInput.value == "") {
      alert("Enter a task to add !");
    } else {
        let li=document.createElement("li");
        li.innerHTML=takenInput.value;
        listContainer.appendChild(li); 
        let span=document.createElement("span"); 
        span.innerHTML="\u00d7";
        li.appendChild(span)   
    }
    takenInput.value='';
    saveData();
  }

  listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
  },false)

  function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
  }
  function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
  }
showTask();
  function deleteAll(){
    if(confirm("Do you want to Permanently Delete all Tasks?")){
    console.log("Deleting All Tasks...");
    window.localStorage.clear()
    showTask();
    }
  }

  

  