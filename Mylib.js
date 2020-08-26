function hasCollided(bullet,wall){
  bulletedge = bullet.x + bullet.width;
  walledge = wall.x;
  if(bulletedge >= walledge){
    return true
  }
  else{
    return false
  }
}