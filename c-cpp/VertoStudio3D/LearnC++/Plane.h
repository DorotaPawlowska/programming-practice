#include "GameObject.h"

class Plane : public GameObject{
  public:
    virtual ~Plane(){};
    void setTexture(SDL_Texture *tex);
    virtual void draw(SDL_Renderer *rend);
    virtual void update();

  private:
    SDL_Texture *texture = nullptr; 
};