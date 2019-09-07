#include <stdio.h>
#include "SDL2/SDL.h"
#undef main // without this line there is - undefined reference to 'WinMain@16' - error!!

typedef struct {
  int x, y;
  short life;
  char *name;
} Man;

void functionn(int x, int y, int array[], const Man *man){
  // man->x = 100;
  printf("%d\n", man->x);
}

int main(int argc, char *argv[]){

  Man man;
  int array[2] = { 1, 2 };
  man.x = 50;
  functionn(0, 125, array, &man);
  printf("outside: %d\n", man.x);


  SDL_Window *window;               // Declare a window
  SDL_Renderer *renderer;           // Declare a renderer

  SDL_Init(SDL_INIT_VIDEO);         // Initialize SDL2

  window = SDL_CreateWindow("Game Window",              // window title
                        SDL_WINDOWPOS_UNDEFINED,        // initial x position
                        SDL_WINDOWPOS_UNDEFINED,        // initial y position
                        640,                            // width, in pixels
                        480,                            // height, in pixels
                        0);                             // flags

  renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);


  SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);

// Clear the screen (to blue)
  SDL_RenderClear(renderer);

// set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  SDL_Rect rect = { 220, 140, 200, 200 };
  SDL_RenderFillRect(renderer, &rect);

// we are done drawning, "present" to the screen  what we-ve drawn
  SDL_RenderPresent(renderer);

// wait a few seconds before quitting
  SDL_Delay(2000);

// Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

// clean up
  SDL_Quit();

  return 0;
}