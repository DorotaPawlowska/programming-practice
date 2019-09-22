
#ifndef main6_h
#define main6_h

#define STATUS_STATE_LIVES 0
#define STATUS_STATE_GAME 1
#define STATUS_STATE_GAMEOVER 2
#define STATUS_STATE_WIN 3

#define NUM_STARS 50
#define NUM_LEDGES 200

#include "SDL2/SDL.h"
#include "SDL2/SDL_ttf.h"
#include "SDL2/SDL_image.h"
#include "SDL2/SDL_mixer.h"

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
  int x, y, baseX, baseY, mode;
  float phase;
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
  Ledge ledges[NUM_LEDGES];

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

  //sounds
  int musicChannel;
  Mix_Chunk *bgMusic, *jumpSound, *landSound, *dieSound;

  // renderer
  SDL_Renderer *renderer;

  // window
  SDL_Window *window;
} GameState;

void doRender(SDL_Renderer *renderer, GameState *game);

#endif