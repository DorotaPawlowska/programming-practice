#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"
#include "GameObject.h"

class BouncyBall : public GameObject{

public:
  void setTexture(SDL_Texture *tex);
  void draw(SDL_Renderer *rend);
  void update();

  void setElasticity(float e);

private:
  SDL_Texture *texture = nullptr; 
  float dy = 0;
  float elasticity = 0.5;
  const float gravity = 0.04;

};