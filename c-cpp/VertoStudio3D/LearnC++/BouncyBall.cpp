#include "BouncyBall.h"
#include <math.h>

// void BouncyBall::setTexture(SDL_Texture *tex){
  // texture = tex;
// }


// void BouncyBall::draw(SDL_Renderer *rend){

  // SDL_Rect rect = {(int)x, (int)y, 32, 32};
  // SDL_RenderCopy(rend, texture, nullptr, &rect);
// }

void BouncyBall::update(){
  if(y+32 < 480){
    y += dy;
    dy += gravity;
  } else {
    dy *= -elasticity;
    y += dy*2;
    if(fabsf(dy) < 0.1){
      // dy = 0;
    }
  }
}

void BouncyBall::setPos(float x, float y){
  this->x = x;
  this->y = y;
}

void BouncyBall::setElasticity(float e){
  elasticity = e;
}
