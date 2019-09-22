#include <stdio.h>
#include "main6.h"

//  ===status_lives======================================

void init_status_lives(GameState *gameState){

  char str[128] = "";

  sprintf(str, "X %u", gameState->man.lives);

  SDL_Color white = { 255, 255, 255, 255};  
  SDL_Surface *tmp = TTF_RenderText_Blended(gameState->font, str, white);
  gameState->label1W = tmp->w;
  gameState->label1H = tmp->h;
  gameState->label1 = SDL_CreateTextureFromSurface(gameState->renderer, tmp);
  SDL_FreeSurface(tmp);

  SDL_Color lightBlue = { 128, 192, 255, 255};
  tmp = TTF_RenderText_Blended(gameState->font, "Get to the end alive!", lightBlue);
  gameState->label2W = tmp->w;
  gameState->label2H = tmp->h;
  gameState->label2 = SDL_CreateTextureFromSurface(gameState->renderer, tmp);
  SDL_FreeSurface(tmp);
}

void draw_status_lives(GameState *gameState){

  SDL_Renderer *renderer = gameState->renderer;
  // set the drawing color to black 
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);

  // Clear the screen
  SDL_RenderClear(renderer);

  // draw a rectangle at man's position
  SDL_Rect rect = { 320-80, 240-24, 48, 48 };
  SDL_RenderCopyEx(renderer, gameState->manFrames[0], NULL, &rect, 0, NULL, gameState->man.facingLeft);

  // set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  SDL_Rect textRect = { 320-20, 240-gameState->label1H/2, gameState->label1W, gameState->label1H };
  SDL_RenderCopy(renderer, gameState->label1, NULL, &textRect);

  SDL_Rect textRect2 = { 320-gameState->label2W/2, 100-gameState->label2H/2, gameState->label2W, gameState->label2H };
  SDL_RenderCopy(renderer, gameState->label2, NULL, &textRect2);
}

void shutdown_status_lives(GameState *gameState){
  SDL_DestroyTexture(gameState->label1);
  gameState->label1 = NULL;

  SDL_DestroyTexture(gameState->label2);
  gameState->label2 = NULL;
}

//  ===game_over======================================

void init_game_over(GameState *gameState){
  
  SDL_Color white = { 255, 255, 255, 255};  
  SDL_Surface *tmp = TTF_RenderText_Blended(gameState->font, "Game Over!", white);
  gameState->label1W = tmp->w;
  gameState->label1H = tmp->h;
  gameState->label1 = SDL_CreateTextureFromSurface(gameState->renderer, tmp);
  SDL_FreeSurface(tmp);
}

void draw_game_over(GameState *gameState){

  SDL_Renderer *renderer = gameState->renderer;
  // set the drawing color to black 
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);

  // Clear the screen
  SDL_RenderClear(renderer);

  // set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);

  SDL_Rect textRect = { 320-gameState->label1W/2, 240-gameState->label1H/2, gameState->label1W, gameState->label1H };
  SDL_RenderCopy(renderer, gameState->label1, NULL, &textRect);
}

void shutdown_game_over(GameState *gameState){
  SDL_DestroyTexture(gameState->label1);
  gameState->label1 = NULL;
}

//  ===game_win======================================

void init_game_win(GameState *gameState){

  SDL_Color white = { 255, 255, 255, 255};  
  SDL_Surface *tmp = TTF_RenderText_Blended(gameState->font, "You live ...", white);
  gameState->label1W = tmp->w;
  gameState->label1H = tmp->h;
  gameState->label1 = SDL_CreateTextureFromSurface(gameState->renderer, tmp);
  SDL_FreeSurface(tmp);
}

void draw_game_win(GameState *gameState){

  SDL_Renderer *renderer = gameState->renderer;
  // set the drawing color to black 
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);

  // Clear the screen
  SDL_RenderClear(renderer);

  // set the drawing color to white
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  SDL_Rect textRect = { 320-gameState->label1W/2, 240-gameState->label1H/2, gameState->label1W, gameState->label1H };
  SDL_RenderCopy(renderer, gameState->label1, NULL, &textRect);
}

void shutdown_game_win(GameState *gameState){
  SDL_DestroyTexture(gameState->label1);
  gameState->label1 = NULL;
}