class unoCard{
  constructor(card_symbol){
    this.card_symbol = card_symbol;
    this.nextCards=[];
    this.color="";
    this.number="";
  
    }
    


     move() {
      
    }


}

function checkmove(mycurrentcard, centerlastCard) {
  if (mycurrentcard.color==centerlastCard.color){
    return true;
  }   
  // add check number if it equals last number 
  return false;
}



function clickcard(indexCard){
  if(whoseTurn=="comp"){
    return;
  }
  var mycards_=document.getElementsByClassName("p8");
  if (checkmove(mycards[indexCard], lastOpenCard))
  {
  mycards_[indexCard].classList.remove(`mmr${indexCard+1}`);
  mycards_[indexCard].classList.add(`animationcard${indexCard+1}`);
  lastOpenCard = mycards[indexCard];
  whoseTurn="comp";
  showTurntext();
  delaybetweenMoves();
  // change value lastOpenCard
  }
  else{
    console.log("different colors");
    console.log(mycards[indexCard].color, lastOpenCard.color);
  }
}


function delaybetweenMoves() {
  setTimeout(compCardmove, 1500);

}

function compCardmove(){
  var compCardtoPut=[];
  for (var i = 0; i<oppsCards.length; i++){
    if (lastOpenCard.color == oppsCards[i].color){
      compCardtoPut.push(oppsCards[i]);
    }
  }
  var graphicCompCardMove=document.getElementsByClassName("p7")[0];
  graphicCompCardMove.src=`cards-front/${compCardtoPut[0].card_symbol}`;
  for (var i =1; i < 8; i++){
  graphicCompCardMove.classList.remove(`mr${i}`);
  }
graphicCompCardMove.classList.add("compmove1");
graphicCompCardMove.classList.add("setbigZindex");
lastOpenCard=compCardtoPut[0];
whoseTurn="meGo";
setTimeout(showTurntext, 1000);

}
