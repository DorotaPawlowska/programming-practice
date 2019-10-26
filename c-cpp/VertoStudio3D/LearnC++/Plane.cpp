#include "Plane.h"

void Plane::setTexture(SDL_Texture *tex){
  texture = tex;
}

void Plane::draw(SDL_Renderer *rend){
  SDL_Rect rect = {(int)x, (int)y, 32, 21};
  SDL_RenderCopy(rend, texture, nullptr, &rect);
}

void Plane::update(){
  x += 2;
}