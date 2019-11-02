#pragma once

#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"

class GameObject{
  public: 
    GameObject();
    virtual ~GameObject(){};

    virtual void draw(SDL_Renderer *rend)=0;
    virtual void update()=0;

    void setPos(float x, float y);
    float getX();
    float getY();

  protected:
    float x = 0, y = 0;

};