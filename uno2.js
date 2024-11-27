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


var zindex=10;

function checkmove(mycurrentcard, centerlastCard) {
  // add if 
  if (mycurrentcard.color==centerlastCard.color){
    return true;
  }
  if (mycurrentcard.number==centerlastCard.number){
    return true;
  }   
  // add check number if it equals last number 
  return false;
}


function takeCard(){
  var deck=document.getElementsByClassName("deck")[0];
  console.log(deck.length);
  var mynewCard=document.createElement("img");
  mynewCard.src="cards-front/uno.png";

  var contNewcard=document.getElementsByClassName("deckcardscont")[0];
  contNewcard.appendChild(mynewCard);
  mynewCard.classList.add("itookcard");
  mynewCard.style=deck.style;
  mynewCard.style.width="8vw";
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
  mycards_[indexCard].style.zIndex = `${zindex}`;
  console.log(`${zindex}`);
  zindex++;
  lastOpenCard = mycards[indexCard];
  console.log('!!!!!!!!!!!!!!!!!!!');
  console.log(mycards[indexCard].card_symbol);
  if (mycards[indexCard].card_symbol=="_G.png" || mycards[indexCard].card_symbol=="_B.png" || mycards[indexCard].card_symbol=="_Y.png" || mycards[indexCard].card_symbol=="_R.png")
  {
    whoseTurn="meGo";
  }
  else
  {
  whoseTurn="comp";
  showTurntext();
  delaybetweenMoves();
  }
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
    if (checkmove(oppsCards[i], lastOpenCard)){
      compCardtoPut.push(oppsCards[i]);
    }
  }
  var graphicCompCardMove=document.getElementsByClassName("p7")[0];
  var graphicCompCardsMove=document.getElementsByClassName("p7");
  for (var i = 0; i<graphicCompCardsMove.length; i++){
    if (graphicCompCardsMove[i].classList.contains("compmove1")){
      continue;
    }
    graphicCompCardMove = graphicCompCardsMove[i];
    break;
  }

  graphicCompCardMove.src=`cards-front/${compCardtoPut[0].card_symbol}`;
  for (var i =1; i < 8; i++){
  graphicCompCardMove.classList.remove(`mr${i}`);
  }
  graphicCompCardMove.classList.add("compmove1");
  //graphicCompCardMove.classList.add("setbigZindex");
  graphicCompCardMove.style.zIndex=`${zindex}`;
  zindex++;
  lastOpenCard=compCardtoPut[0];
  if (oppsCards[indexCard].card_symbol=="_G.png" || oppsCards[indexCard].card_symbol=="_B.png" || oppsCards[indexCard].card_symbol=="_Y.png" || oppsCards[indexCard].card_symbol=="_R.png")
    {
      whoseTurn="comp";
    }
    else
    {
    whoseTurn="meGo";
   // showTurntext();
    //delaybetweenMoves();
    }
    whoseTurn="meGo";
  setTimeout(showTurntext, 1000);
  }