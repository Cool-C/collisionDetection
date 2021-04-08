function isTouching(game_object1,game_object2){
    if(game_object1.x - game_object2.x < game_object1.width/2 + game_object2.width/2  && game_object2.x - game_object1.x < game_object1.width/2 + game_object2.width/2 && game_object1.y - game_object2.y  < game_object1.height/2 + game_object2.height/2 && game_object2.y - game_object1.y < game_object1.height/2 + game_object2.height/2 ){
      return true;
    }
    else {
      return false;
    }
  }
  
  function bounceOff(o1,o2){
    if(o1.x - o2.x < o1.width/2 + o2.width/2  && o2.x - o1.x < o1.width/2 + o2.width/2){
      o1.velocityX = o1.velocityX * (-1);
    }

  if(o1.y - o2.y < o1.height/2 + o2.height/2  && o2.y - o1.y < o1.height/2 + o2.height/2){
    o1.velocityY = o1.velocityY * (-1);
  }

  }