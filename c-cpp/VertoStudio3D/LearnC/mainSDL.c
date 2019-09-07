#include "SDL2/SDL.h"
#include <stdio.h>
#undef main

int main( int argc, char *args[] ) {
  
  if(SDL_Init( SDL_INIT_EVERYTHING ) < 0){
    printf("error");
  } //Start SDL

  printf("skompilowało się");

  SDL_Quit(); //Quit SDL

  return 0;
}