#include <stdio.h>
#include "SDL2/SDL.h"
#undef main // without this line there is - undefined reference to 'WinMain@16' - error!!

typedef struct{
  int x, y;
  short life;
  char *name;
} Man;

/*
void functionn(int x, int y, int array[], const Man *man){
  // man->x = 100;
  printf("%d\n", man->x);
}
*/

int processEvents(SDL_Window *window, Man *man){
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
    man->x -= 10;
  }
  if ( state[SDL_SCANCODE_RIGHT] ) {
    man->x += 10;
  }
  if ( state[SDL_SCANCODE_UP] ) {
    man->y -= 10;
  }
  if ( state[SDL_SCANCODE_DOWN] ) {
    man->y += 10;
  }

  return done;
}

void doRender(SDL_Renderer *renderer, Man *man){
    
  // set the drawing color to blue 
  SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);

  // Clear the screen (to blue)
  SDL_RenderClear(renderer);

  // set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  SDL_Rect rect = { man->x, man->y, 200, 200 };
  SDL_RenderFillRect(renderer, &rect);

  // we are done drawning, "present" to the screen  what we-ve drawn
  SDL_RenderPresent(renderer);
}



int main(int argc, char *argv[]){

/*
  Man man;
  int array[2] = { 1, 2 };
  man.x = 50;
  functionn(0, 125, array, &man);
  printf("outside: %d\n", man.x);
*/

  SDL_Window *window;               // Declare a window
  SDL_Renderer *renderer;           // Declare a renderer

  SDL_Init(SDL_INIT_VIDEO);         // Initialize SDL2

  Man man;
  man.x = 220;
  man.y = 140;

  window = SDL_CreateWindow("Game Window",              // window title
                        SDL_WINDOWPOS_UNDEFINED,        // initial x position
                        SDL_WINDOWPOS_UNDEFINED,        // initial y position
                        640,                            // width, in pixels
                        480,                            // height, in pixels
                        0);                             // flags

  renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);


  //the window is open: enter program loop (see SDL_PollEvent)
  int done = 0;

  //Event loop
  while(!done){

    done = processEvents(window, &man);

    // render display
    doRender(renderer, &man);

    // wait a few seconds before quitting
    SDL_Delay(10);

  }

  // Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

  // clean up
  SDL_Quit();

  return 0;
}