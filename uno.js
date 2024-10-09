var deckCards=[];
var usedCards=[];

function fullDeck(){
  var cardColor=['R', 'G', 'B', 'Y'];
  var cardValues=['_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'D2', 'skip'];
  for (var n = 0; n < 2; n++){
   for (var i = 0; i<cardColor.length; i++){
    for (var e = 0; e<cardValues.length; e++){
      var cardName=`${cardValues[e]}${cardColor[i]}.png`;
      deckCards.push(cardName);
    }
  }
  deckCards.push("W.png");
  deckCards.push("D4W.png");
}
  console.log(deckCards);
  var firstOpenCard=document.getElementsByClassName("firstOpenCard")[0];
  var firstCard=Math.floor(Math.random()*108);
  var nameCard = deckCards[firstCard];
  // check if namecard equals skip card ect.
  while (nameCard == 'W.png'){
     firstCard=Math.floor(Math.random()*108);
     nameCard = deckCards[firstCard];
  }
  firstOpenCard.src=`cards-front/${nameCard}`;
  usedCards.push(firstCard);
  //firstOpenCard.classList.add("rotateCards");
}

fullDeck();

function hideAll(){
  //var title=document.getElementById("title");
  var title=document.getElementsByClassName("title")[0];
  title.style.display="none";
  var entername=document.getElementById("entername");
  entername.style.display="none";
  var playersid=document.getElementById("playersid");
  playersid.style.display="none";
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
    allmyCards[cardIndex].src=`cards-front/${deckCards[numCard]}`;

  }
}

timeoutAnimationLoadPage();