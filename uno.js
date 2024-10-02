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

  for (var cardIndex=0; cardIndex<allCards.length; cardIndex++){
    var classname=`move${cardIndex+1}`;
      allCards[cardIndex].classList.add(classname);
  }

  setTimeout(AnimationLoadPage, 500);
}

function AnimationLoadPage(){
  var allCards=document.getElementsByClassName("deck");

  for (var cardIndex=1; cardIndex<allCards.length; cardIndex++){
    console.log(cardIndex);
    var classname=`mr${cardIndex}`;
    console.log(classname);
    allCards[cardIndex].classList.remove(`move${cardIndex+1}`);
      allCards[cardIndex].classList.add(classname);
  }


}

timeoutAnimationLoadPage();