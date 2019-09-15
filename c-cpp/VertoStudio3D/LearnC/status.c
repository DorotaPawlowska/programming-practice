#include <stdio.h>
#include "main6.h"

void init_status_lives(GameState *gameState){

  char str[128] = "";

  sprintf(str, "X %u", gameState->man.lives);

  SDL_Color white = { 255, 255, 255, 255};
  SDL_Surface *tmp = TTF_RenderText_Blended(gameState->font, str, white);
  gameState->labelW = tmp->w;
  gameState->labelH = tmp->h;
  gameState->label = SDL_CreateTextureFromSurface(gameState->renderer, tmp);
  SDL_FreeSurface(tmp);
}

void draw_status_lives(GameState *gameState){
  // set the drawing color to black 
  SDL_SetRenderDrawColor(gameState->renderer, 0, 0, 0, 255);

  // Clear the screen
  SDL_RenderClear(gameState->renderer);

  // draw a rectangle at man's position
  SDL_Rect rect = { 320-80, 240-24, 48, 48 };
  SDL_RenderCopyEx(gameState->renderer, gameState->manFrames[0], NULL, &rect, 0, NULL, gameState->man.facingLeft);

  // set the drawing color to white
  SDL_SetRenderDrawColor(gameState->renderer, 255, 255, 255, 255);

  SDL_Rect textRect = { 320-20, 240-gameState->labelH/2, gameState->labelW, gameState->labelH };
  SDL_RenderCopy(gameState->renderer, gameState->label, NULL, &textRect);
}

void shutdown_status_lives(GameState *gameState){
  SDL_DestroyTexture(gameState->label);
  gameState->label = NULL;
}

