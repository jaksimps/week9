var valu = document.body.querySelector(".val");
var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var sec = document.body.querySelector(".second");
var count = document.body.querySelector(".counter");
var note = document.body.querySelector(".note");
var n = document.getElementById("N");
var list = [];


var pages = [
  {
  title:"Home",
  content:""
  
},
  {
   title:"About",
  content:"Jake"
  },
  {
    title:"View",
    content:""
  }
  ]




function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
      writeStuff(pg.content, pg.title);
   })
  this.button.innerHTML = pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
 n.style.display = "none";
display.innerHTML = "";
count.innerHTML ="";
var big = document.createElement("h1");
big.innerHTML = pg;
  if(pg !== "View"){
    display.appendChild(big);
    sec.innerHTML = stuff;  
  }else{
    createNew();
  }
  

  
}
function writeInteract(){
  display.innerHTML = "";
  sec.innerHTML ="";
  count.innerHTML = "Counter: " + current;
  var heading = document.createElement("h1");
  heading.innerHTML = "Interact";
  display.appendChild(heading);
  
   var btn = document.createElement("BUTTON");   
   btn.innerHTML = "Increase Counter";                  
   sec.appendChild(btn); 
  
  btn.addEventListener("click", function(){
    current++;
 count.innerHTML = "Counter: " + current;
})

 
  
  
}
writeStuff(pages[0].content, "");

function validate(){
  var valEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    valu.innerHTML ="";
    for(var i = 0; i < pages.length; i++){
  new pageMaker(pages[i]);
}
  }else{
    valEle.innerHTML="Incorrect Username";
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})


function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i = 0; i < list.length; i++){
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}

  function submit(){
    var text = document.body.querySelector(".notes").value;
    var importance = document.body.querySelector(".rank").value;
    if(text.length > 0){
       list.push(importance + " " + text);
      document.body.querySelector(".itmMess").innerHTML = "";
    }else{
      document.body.querySelector(".itmMess").innerHTML = "Not enough characters";
    }
   
    renderList();
  }


function createNew(){
  document.HTML = "";
  n.style.display = "block";
  
  var btn = document.createElement("BUTTON");   
   btn.innerHTML = "Submit";                  
   note.appendChild(btn); 
  
  btn.addEventListener("click", function(){
    submit();
})
}