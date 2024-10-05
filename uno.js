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


}

timeoutAnimationLoadPage();