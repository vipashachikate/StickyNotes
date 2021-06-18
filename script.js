var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var check = document.getElementById("check");
var xicon = document.getElementById("xicon");
var i =0;

xicon.addEventListener("click", function(){
  typeNote();
})

check.addEventListener("click", function(){
  createNote();
})



function typeNote(){
  if(container3.style.display=="none"){
    container3.style.display="block";
  }
  else{
    container3.style.display="none";
  }
}

function createNote(){
  var text = document.getElementById("text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = text;
  node0.appendChild(node1);
  node1.setAttribute('style', "width:250px; height:250px;padding:20px;overflow:hidden;box-shadow:2px 2px 10px black;margin:20px;");

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  container2.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("click", function(){
  node0.remove();
  
})

document.getElementById("text").value=" ";
}

function margin(){
   var random_margin = ["1px", "5px", "10px", "15px","20px"];
  return random_margin[Math.floor(Math.random()*random_margin.length)];
}

function rotate(){
   var random_rotate = ["rotate(3deg)", "rotate(-3deg)", "rotate-5deg)", "rotate(-8deg)","rotate(-2deg)"];
  return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}


function color(){
  var random_color = ["blue","green","yellow", "pink","purple"];
  if(i > random_color.length-1){
    i=0;
  }
  return random_color[i++];
}
