var startgame=false;
var ourmove=null;
var ourdistance=5.5;
var oppmove=null;
var oppdistance=3.5;


function checkstartgame(){
  if (startgame==true){
    return true;
  }
  else {
    startgame=true;
    return false;
  }
}

function chooserock(){
  if (checkstartgame()==true){
    return;
  }
  var rock=document.getElementById("rock");
  var scissors=document.getElementById("scissors");
  var paper=document.getElementById("paper");
  rock.style.transform="translateY(-37vh) translateX(calc(5.18vw))";
  scissors.style.opacity="0";
  paper.style.opacity="0";
  oppchoice();
  ourmove=rock;
  ourdistance=10.37;
  setTimeout(show_winner, 1000);
}


function show_winner(){
ourmove.style.transform="translateY(-37vh) translateX(calc("+ourdistance+"vw))";
oppmove.style.transform="translateY(36vh) translateX(calc("+oppdistance+"vw))";
console.log("translateY(-37vh) translateX(calc("+ourdistance+"vw))");

}


function choosepaper(){
  if (checkstartgame()==true){
    return;
  }
  var rock=document.getElementById("rock");
  var scissors=document.getElementById("scissors");
  var paper=document.getElementById("paper")
  paper.style.transform="translateY(-37vh) translateX(calc(-5.18vw))" ;
  rock.style.opacity="0";
  scissors.style.opacity="0";
  oppchoice();
  ourmove=paper;
  ourdistance=0;
  setTimeout(show_winner, 1000);
}
function choosescissors(){
  if (checkstartgame()==true){
    return;
  }
  var rock=document.getElementById("rock");
  var scissors=document.getElementById("scissors");
  var paper=document.getElementById("paper")
  scissors.style.transform="translateY(-37vh) translateX(-15.55vw)";
  rock.style.opacity="0";
  paper.style.opacity="0";
  oppchoice();
  ourmove=scissors;
  ourdistance=-10.37;
  setTimeout(show_winner, 1000);
}

function oppchoice(){
  var randomnumber=0;
  var opprock=document.getElementById("rockopp");
  var opppaper=document.getElementById("paperopp");
  var oppscissors=document.getElementById("scissorsopp");
  while (randomnumber==0 || randomnumber==10)
    randomnumber=Math.round( Math.random()*10);
  console.log(randomnumber);
  if (randomnumber>0 && randomnumber<4){
    console.log("rock");

    opprock.style.transform="translateY(36vh) translateX(15.55vw)"
    opppaper.style.opacity="0";
    oppscissors.style.opacity="0";
    oppmove=opprock;
    oppdistance=10.37;
  }
  else   if (randomnumber>3 && randomnumber<7){
    console.log("paper");
    opprock.style.opacity="0";
    oppscissors.style.opacity="0";
    opppaper.style.transform="translateY(36vh) translateX(5.18vw)"
    oppmove=opppaper;
    oppdistance=0;
  }
  else   if (randomnumber>6 && randomnumber<10){
    console.log("scissors");
    opppaper.style.opacity="0";
    opprock.style.opacity="0";
    oppscissors.style.transform="translateY(36vh) translateX(-5.18vw)"
    oppmove=oppscissors;
    oppdistance=-10.37;
  }
}