var deckCards=[];
var usedCards=[];
var mycards=[];
var oppsCards=[];
var lastOpenCard=null;
var whoseTurn="meGo";
var textMYturn=document.getElementsByClassName("me__")[0];
var textCompturn=document.getElementsByClassName("comp")[0];


function check_Card(cards, card){
  for(var i = 0; i<cards.length; i++){
    if (card == cards[i]){
      return true;
    }
  }
  return false;
}


function showTurntext(){
  if (whoseTurn=="meGo"){
    textMYturn.style.opacity="1";
    textCompturn.style.opacity="0";
  }
  else{
    textCompturn.style.opacity="1";
    textMYturn.style.opacity="0";
  }
}


function fullDeck(){
showTurntext();
  var notFirstCards = ['D2B.png', 'D2G.png', 'D2R.png', 'D2Y.png', 'D4W.png', 'skipB.png', 'skipG.png', 'skipR.png', 'skipY.png', 'W.png', '_R.png', '_B.png', '_G.png', '_Y.png' ];
  allCards_deck();
  console.log(deckCards);
  var firstOpenCard=document.getElementsByClassName("firstOpenCard")[0];
  var firstCard=Math.floor(Math.random()*108);
  var nameCard = deckCards[firstCard].card_symbol;
  // check if namecard equals skip card ect.

  console.log('sonya');
  while (check_Card(notFirstCards, nameCard)== true){
    console.log(nameCard);
     firstCard=Math.floor(Math.random()*108);
     nameCard = deckCards[firstCard].card_symbol;
  }
  console.log(nameCard);
  firstOpenCard.src=`cards-front/${nameCard}`;
  usedCards.push(firstCard);
  lastOpenCard= deckCards[firstCard];
  console.log(lastOpenCard.color);
  console.log("last color");
  //firstOpenCard.classList.add("rotateCards");
}

fullDeck();

function allCards_deck() {
  var cardColor = ['R', 'G', 'B', 'Y'];
  var cardValues = ['_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'D2', 'skip'];
  for (var n = 0; n < 2; n++) {
    for (var i = 0; i < cardColor.length; i++) {
      for (var e = 0; e < cardValues.length; e++) {
        var cardName = `${cardValues[e]}${cardColor[i]}.png`;
        var object_unoCard= new unoCard(cardName);
        console.log(cardName);
        console.log('####################');
        object_unoCard.color=cardColor[i];
        object_unoCard.number=cardValues[e];
        // fill in number field
        deckCards.push(object_unoCard);
      }
    }
    deckCards.push(new unoCard("W.png", color="Wild"));
    deckCards.push(new unoCard("D4W.png", color="Wild"));
  }
}

function hideAll(){
  //var title=document.getElementById("title");
  var title=document.getElementsByClassName("title")[0];
  title.style.display="none";
  var entername=document.getElementById("entername");
  entername.style.display="none";
  var playersid=document.getElementById("playersid");
  playersid.style.display="none";
  document.getElementsByClassName("gamefield")[0].style.display="block";
  timeoutAnimationLoadPage();
}

function timeoutAnimationLoadPage(){
  var allCards=document.getElementsByClassName("deck");
  var allmyCards=document.getElementsByClassName("mydeck");
  for (var cardIndex=1; cardIndex<allCards.length; cardIndex++){
    var classname=`move${cardIndex}`;
      allCards[cardIndex].classList.add(classname);
      var myclassname=`mymove${cardIndex}`;
      allmyCards[cardIndex].classList.add(myclassname);
  }

  setTimeout(AnimationLoadPage, 800);
}

function AnimationLoadPage(){
  var allCards=document.getElementsByClassName("deck");
  var allmyCards=document.getElementsByClassName("mydeck");
  for (var cardIndex=1; cardIndex<allCards.length; cardIndex++){
    var classname=`mr${cardIndex}`;
    allCards[cardIndex].classList.remove(`move${cardIndex}`);
    allmyCards[cardIndex].classList.remove(`mymove${cardIndex}`); 

    allCards[cardIndex].classList.remove(`p${cardIndex}`); // layer up to down
    allCards[cardIndex].classList.add(classname);
    var myclassname=`mmr${cardIndex}`;
    allmyCards[cardIndex].classList.add(myclassname);
    allCards[cardIndex].classList.add('p7');
    allmyCards[cardIndex].classList.add('p8');

  }

  setTimeout(showMyCards, 1000);
}


function showMyCards(){
  var allmyCards=document.getElementsByClassName("mydeck");
  for (var cardIndex=1; cardIndex<allmyCards.length; cardIndex++){
    var numCard=Math.floor(Math.random()*108);
    while (check_Card(usedCards, numCard)==true){
      console.log(`card ${deckCards[numCard].card_symbol} is already in use`);
      numCard=Math.floor(Math.random()*108);

    }

    allmyCards[cardIndex].src=`cards-front/${deckCards[numCard].card_symbol}`;
    mycards.push(deckCards[numCard]);
    usedCards.push(numCard);

  }
  generateOpp_cards();
  document.getElementsByClassName("firstOpenCard")[0].classList.add("firstOpenCardMove");
}


function generateOpp_cards(){
  while(oppsCards.length<7){
       
    var numCard=Math.floor(Math.random()*108);
    while (check_Card(usedCards, numCard)==true){
      console.log(`card ${deckCards[numCard].card_symbol} is already in use`);
      numCard=Math.floor(Math.random()*108);

    }
    oppsCards.push(deckCards[numCard]);
    usedCards.push(numCard);


  }
  for (var i = 0; i <oppsCards.length; i++){
    console.log(oppsCards[i].card_symbol);
  }
}




