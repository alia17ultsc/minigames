function chooserock(){
  var rock=document.getElementById("rock");
  rock.style.transform="translateY(-40vh) translateX(calc(10.37vw))";
  oppchoice();
}
function choosepaper(){
  var paper=document.getElementById("paper");
  paper.style.transform="translateY(-40vh)";
  oppchoice();
}
function choosescissors(){
  var scissors=document.getElementById("scissors");
  scissors.style.transform="translateY(-40vh) translateX(-10.37vw)";
  oppchoice();
}

function oppchoice(){
  var randomnumber=0;
  while (randomnumber==0 || randomnumber==10)
    randomnumber=Math.round( Math.random()*10);
  console.log(randomnumber);
  if (randomnumber>0 && randomnumber<4){
    console.log("rock");
  }
  else   if (randomnumber>3 && randomnumber<7){
    console.log("paper");
  }
  else   if (randomnumber>6 && randomnumber<10){
    console.log("scissors");
  }
}