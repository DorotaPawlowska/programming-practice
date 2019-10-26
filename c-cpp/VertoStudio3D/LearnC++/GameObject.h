#pragma once

#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"

class GameObject{
  public: 
    GameObject();

    void draw(SDL_Renderer *rend);
    void update();

    void setPos(float x, float y);

  protected:
    float x = 0, y = 0;

};