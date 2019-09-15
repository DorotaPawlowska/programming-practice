
#ifndef main6_h
#define main6_h

#define STATUS_STATE_LIVES 0
#define STATUS_STATE_GAME 1
#define STATUS_STATE_GAMEOVER 2

#define NUM_STARS 100

#include "SDL2/SDL.h"
#include "SDL2/SDL_ttf.h"
#include "SDL2/SDL_image.h"

// ==================================== structs{} ++++++++++++++++++++++++++++++++++++++++++++

typedef struct{
  float x, y;
  float dx, dy;
  short lives;
  char *name;
  int onLedge, isDead;

  int animFrame;
  int facingLeft;
  int slowingDown;
} Man;

typedef struct{
  int x, y;
} Star;

typedef struct{
  int x, y, w, h;
} Ledge;

typedef struct{

  float scrollX;

  // Players
  Man man;

  // Stars
  Star stars[NUM_STARS];

  // Ledges
  Ledge ledges[100];

  // images
  SDL_Texture *star;
  SDL_Texture *manFrames[2];
  SDL_Texture *brick;
  SDL_Texture *fire;
  SDL_Texture *label1, *label2;
  int label1W, label1H, label2W, label2H;

  //joystick
  SDL_Joystick *joystick;

  // fonts
  TTF_Font *font;

  //time
  int time, deathCountdown;
  int statusState;

  // renderer
  SDL_Renderer *renderer;
} GameState;

void doRender(SDL_Renderer *renderer, GameState *game);

#endif