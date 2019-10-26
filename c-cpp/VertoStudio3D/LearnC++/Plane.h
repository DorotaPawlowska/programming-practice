#include "GameObject.h"

class Plane : public GameObject{
  public:
    void setTexture(SDL_Texture *tex);
    void draw(SDL_Renderer *rend);
    void update();

  private:
    SDL_Texture *texture = nullptr; 
};