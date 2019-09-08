#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"
#undef main // without this line there is - undefined reference to 'WinMain@16' - error!!

typedef struct{
  int x, y;
  short life;
  char *name;
} Man;

typedef struct{
  int x, y;
} Star;

typedef struct{
  // Players
  Man man;

// Stars
  Star stars[100];

  // images
  SDL_Texture *star;
  SDL_Renderer *renderer;
} GameState;

void loadGame(GameState *game){

  SDL_Surface *starSurface = NULL;

  // load images and create rendering textures from them
  starSurface = IMG_Load("star.png");
  if(starSurface == NULL){
    printf("Cannot find star.png!\n\n");
    SDL_Quit();
    exit(1);
  }

  game->star = SDL_CreateTextureFromSurface(game->renderer, starSurface);
  SDL_FreeSurface(starSurface);

  game->man.x = 320-40;
  game->man.y = 240-40;

  for(int i = 0; i < 100; i++){
    game->stars[i].x = rand()%640;
    game->stars[i].y = rand()%480;
  }

}

int processEvents(SDL_Window *window, GameState *game){
  SDL_Event event;
  int done = 0;

  //check for events
  while(SDL_PollEvent(&event)){
    switch(event.type){
      case SDL_WINDOWEVENT_CLOSE:{
        if(window){
          SDL_DestroyWindow(window);
          window = NULL;
          done = 1;
        }
      }
      break;
      case SDL_KEYDOWN:{
        switch(event.key.keysym.sym){
          case SDLK_ESCAPE:
            done = 1;
          break;
          // case SDLK_RIGHT:
            // man->x += 10;
          // break;
          // case SDLK_LEFT:
            // man->x += 10;
          // break;

        }
      }
      break;
      case SDL_QUIT:{
        // quit out of the game
        done = 1;
      break;
      }
    }
  }

  const Uint8 *state = SDL_GetKeyboardState(NULL);
  if ( state[SDL_SCANCODE_LEFT] ) {
    game->man.x -= 10;
  }
  if ( state[SDL_SCANCODE_RIGHT] ) {
    game->man.x += 10;
  }
  if ( state[SDL_SCANCODE_UP] ) {
    game->man.y -= 10;
  }
  if ( state[SDL_SCANCODE_DOWN] ) {
    game->man.y += 10;
  }

  return done;
}

void doRender(SDL_Renderer *renderer, GameState *game){
    
  // set the drawing color to blue 
  SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);

  // Clear the screen (to blue)
  SDL_RenderClear(renderer);

  // set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  SDL_Rect rect = { game->man.x, game->man.y, 50, 50 };
  SDL_RenderFillRect(renderer, &rect);

  // draw the star image
  for(int i = 0; i < 100; i++){
    SDL_Rect starRect = { game->stars[i].x, game->stars[i].y, 100, 100 };
    SDL_RenderCopy(renderer, game->star, NULL, &starRect);
  }


  // we are done drawning, "present" to the screen  what weve drawn
  SDL_RenderPresent(renderer);
}


int main(int argc, char *argv[]){

  GameState gameState;
  SDL_Window *window = NULL;               // Declare a window
  SDL_Renderer *renderer = NULL;           // Declare a renderer

  SDL_Init(SDL_INIT_VIDEO);         // Initialize SDL2

  srand(time(NULL));

  window = SDL_CreateWindow("Game Window",              // window title
                        SDL_WINDOWPOS_UNDEFINED,        // initial x position
                        SDL_WINDOWPOS_UNDEFINED,        // initial y position
                        640,                            // width, in pixels
                        480,                            // height, in pixels
                        0);                             // flags

  renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
  gameState.renderer = renderer;

  loadGame(&gameState);

  //the window is open: enter program loop (see SDL_PollEvent)
  int done = 0;

  //Event loop
  while(!done){

    done = processEvents(window, &gameState);

    // render display
    doRender(renderer, &gameState);

    // wait a few seconds before quitting
    // SDL_Delay(10);

  }

  // shutdown game and unload all memory
  SDL_DestroyTexture(gameState.star);

  // Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

  // clean up
  SDL_Quit();

  return 0;
}