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
  var mycards_=document.getElementsByClassName("p8");
  if (checkmove(mycards[indexCard], lastOpenCard))
  {
  mycards_[indexCard].classList.remove(`mmr${indexCard+1}`);
  mycards_[indexCard].classList.add(`animationcard${indexCard+1}`);
  lastOpenCard = mycards[indexCard];
  // change value lastOpenCard
  }
  else{
    console.log("different colors");
    console.log(mycards[indexCard].color, lastOpenCard.color);
  }
}

