#include "main6.h"

#ifndef status_h
#define status_h

void init_status_lives(GameState *gameState);
void draw_status_lives(GameState *gameState);
void shutdown_status_lives(GameState *gameState);

void init_game_over(GameState *GameState);
void draw_game_over(GameState *GameState);
void shutdown_game_over(GameState *GameState);

void init_game_win(GameState *GameState);
void draw_game_win(GameState *GameState);
void shutdown_game_win(GameState *GameState);

#endif