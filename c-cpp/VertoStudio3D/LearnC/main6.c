#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include "main6.h"
#include "status.h"

// ==================================== const ++++++++++++++++++++++++++++++++++++++++++++

#undef main // without this line there is - undefined reference to 'WinMain@16' - error!!
#define GRAVITY 0.35f

// ==================================== functions() ++++++++++++++++++++++++++++++++++++++++++++

void loadGame(GameState *game){

  SDL_Surface *surface = NULL;

  // load images and create rendering textures from them
  surface = IMG_Load("star.png");
  if(surface == NULL){
    printf("Cannot find star.png!\n\n");
    SDL_Quit();
    exit(1);
  }

  game->star = SDL_CreateTextureFromSurface(game->renderer, surface);
  SDL_FreeSurface(surface);

  surface = IMG_Load("man.png");
  if(surface == NULL){
    printf("Cannot find man.png!\n\n");
    SDL_Quit();
    exit(1);
  }

  game->manFrames[0] = SDL_CreateTextureFromSurface(game->renderer, surface);
  SDL_FreeSurface(surface);

  surface = IMG_Load("man_2.png");
  if(surface == NULL){
    printf("Cannot find man_2.png!\n\n");
    SDL_Quit();
    exit(1);
  }

  game->manFrames[1] = SDL_CreateTextureFromSurface(game->renderer, surface);
  SDL_FreeSurface(surface);

  surface = IMG_Load("brick2.png");
  if(surface == NULL){
    printf("Cannot find brick.png!\n\n");
    SDL_Quit();
    exit(1);
  }
  
  game->brick = SDL_CreateTextureFromSurface(game->renderer, surface);
  SDL_FreeSurface(surface);

  surface = IMG_Load("fire.png");
  if(surface == NULL){
    printf("Cannot find fire.png!\n\n");
    SDL_Quit();
    exit(1);
  }
  
  game->fire = SDL_CreateTextureFromSurface(game->renderer, surface);
  SDL_FreeSurface(surface);

  // load fonts
  game->font = TTF_OpenFont("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\fonts\\pixel_caps.ttf", 18);
  if(!game->font){
    printf("Cannot find font file!\n\n");
    SDL_Quit();
    exit(1);
  }

  // load sounds
  game->bgMusic = Mix_LoadWAV("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\music\\music.wav");
  if(game->bgMusic != NULL){
    Mix_VolumeChunk(game->bgMusic, 8);
  }

  game->jumpSound = Mix_LoadWAV("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\music\\jump.wav");
  if(game->jumpSound != NULL){
    Mix_VolumeChunk(game->jumpSound, 64);
  }

  game->dieSound = Mix_LoadWAV("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\music\\die.wav");
  if(game->dieSound != NULL){
    Mix_VolumeChunk(game->dieSound, 8);
  }

  game->landSound = Mix_LoadWAV("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\music\\land.wav");
  if(game->landSound != NULL){
    Mix_VolumeChunk(game->landSound, 64);
  }


  game->label1 = NULL;
  game->label2 = NULL;

  game->man.x = 100;
  game->man.y = 240-40;
  game->man.dy = 0;
  game->man.dx = 0;
  game->man.onLedge = 0;
  game->man.animFrame = 0;
  game->man.facingLeft = 0;
  game->man.slowingDown = 0;
  game->man.lives = 3;
  game->man.isDead = 0;
  game->statusState = STATUS_STATE_LIVES;

  init_status_lives(game);
  
  game->time = 0;
  game->scrollX = 0;
  game->deathCountdown = -1;

  for(int i = 0; i < NUM_STARS; i++){
    game->stars[i].x = 320+rand()%38400;
    game->stars[i].y = rand()%480;
  }

  // init ledges
  for(int i = 0; i < 100; i++){
    game->ledges[i].w = 256;
    game->ledges[i].h = 64;
    game->ledges[i].x = i*384;
    if(i==0) game->ledges[i].y = 400;
    else game->ledges[i].y = 300+100-rand()%200;
  }

  game->ledges[99].x = 350;
  game->ledges[99].y = 200;

  game->ledges[98].x = 350;
  game->ledges[98].y = 350;

}

// useful utility function to see if two rectangles are colliding at all
int collide2d(float x1, float y1, float x2, float y2, float wt1, float ht1, float wt2, float ht2){
  return (!((x1 > (x2+wt2)) || (x2 > (x1+wt1)) || (y1 > (y2+ht2)) || (y2 > (y1+ht1))));
}

void process(GameState *game){

  // add time
  game->time++;

  if(game->statusState == STATUS_STATE_LIVES){
    if(game->time > 120){
      shutdown_status_lives(game);
      game->statusState = STATUS_STATE_GAME;
      game->musicChannel = Mix_PlayChannel(-1, game->bgMusic, -1);
    } 
  }
  else if(game->statusState == STATUS_STATE_GAMEOVER){

    Mix_HaltChannel(game->musicChannel);
    if(game->time > 190){
      SDL_Quit();
      exit(0);
    }
  }
  else if(game->statusState == STATUS_STATE_GAME){
    if(!game->man.isDead){
      // man movement
      Man *man = &game->man;
      man->x += man->dx;
      man->y += man->dy;

      if(man->dx != 0 && man->onLedge && !man->slowingDown){
        if(game->time % 8 == 0){
          if(man->animFrame == 0){
            man->animFrame = 1;
          } else{
            man->animFrame = 0;
          }
        }
      }

      man->dy += GRAVITY;
    }
      if(game->man.isDead && game->deathCountdown < 0){
        game->deathCountdown = 120;
      }

      if(game->deathCountdown >= 0){

        game->deathCountdown--;
        
        if(game->deathCountdown < 0){
          // init_game_over(game);
          // game->statusState = STATUS_STATE_GAMEOVER;

          game->man.lives--;

          if(game->man.lives >= 0){
            init_status_lives(game);
            game->statusState = STATUS_STATE_LIVES;
            game->time = 0;

            game->man.isDead = 0;
            game->man.x = 120;
            game->man.y = 240;
            game->man.dx = 0;
            game->man.dy = 0;
            game->man.onLedge = 0;

          } else {
            // init_game_over(game);
            game->statusState = STATUS_STATE_GAMEOVER;
            game->time = 0;
          }
        } 
      }

  }
  game->scrollX = -game->man.x+320;
  if(game->scrollX > 0){
    game->scrollX = 0;
  }
}

void collisionDetect(GameState *game){

  for(int i = 0; i< NUM_STARS; i++){
    if(collide2d(game->man.x, game->man.y, game->stars[i].x, game->stars[i].y,48,48,32,32)){
      if(!game->man.isDead){
        game->man.isDead = 1;
        Mix_HaltChannel(game->musicChannel);
        Mix_PlayChannel(-1, game->dieSound, 0);
      }
      break;
    }
  }

  //check for collision with any ledges (brick blocks)
  for(int i = 0; i < 100; i++){
    float mw = 48, mh = 48;
    float mx = game->man.x, my = game->man.y;
    float bx = game->ledges[i].x, by = game->ledges[i].y,
          bw = game->ledges[i].w, bh = game->ledges[i].h;

    if( my+mw/2 > bx && mx+mw/2 < bx+bw){
      //are we bumping our head?
      if(my < by+bh && my > by && game->man.dy < 0){
        //correct y
        game->man.y = by+bh;
        my = by+bh;

        // bumped our head, stop any jump velocity
        game->man.dy = 0;
        game->man.onLedge = 1;
      }
    }

    if(mx+mw > bx && mx < bx+bw){
      //are we landing on the leadge?
      if(my+mh > by && my < by && game->man.dy > 0){
        //correct y
        game->man.y = by-mh;
        my = by-mh;

        // landed on this ledge, stop any jump velocity
        game->man.dy = 0;
        if(!game->man.onLedge){
          Mix_PlayChannel(-1, game->landSound, 0);
          game->man.onLedge = 1;
        }
      }
    }

    if(my+mh > by && my < by+bh){
      // rubbing against right edge
      if(mx < bx+bw && mx+mw > bx+bw && game->man.dx < 0){
        // correct x
        game->man.x = bx+bw;
        mx = bx+bw;

        game->man.dx = 0;
      }// rubbing against right edge
      else if(mx+mw > bx && mx < bx && game->man.dx > 0){
        // correct x
        game->man.x = bx-mw;
        mx = bx-mw;

        game->man.dx = 0;
      }

    }
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
          case SDLK_UP:
            // printf("%g\n", game->man.dy);
            if(game->man.onLedge){
              game->man.dy = -8;
              game->man.onLedge = 0;
              Mix_PlayChannel(-1, game->jumpSound, 0);
            }
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

  // more jumping
  if ( state[SDL_SCANCODE_UP] ) {
    game->man.dy -= 0.2f;
  }

  // walking
  if ( state[SDL_SCANCODE_LEFT] ) {
    game->man.dx -= 0.5;
    if(game->man.dx < -6){
      game->man.dx = -6;
    }
    game->man.facingLeft = 1;
    game->man.slowingDown = 0;
  }
  else if ( state[SDL_SCANCODE_RIGHT] ) {
    game->man.dx += 0.5;
    if(game->man.dx > 6){
      game->man.dx = 6;
    }  
    game->man.facingLeft = 0;
    game->man.slowingDown = 0;
  }
  else {
    game->man.animFrame = 0;
    game->man.dx *= 0.8f;
    game->man.slowingDown = 1;
    if(fabsf(game->man.dx) < 0.1f){
      game->man.dx = 0;
    }
  }
  // if ( state[SDL_SCANCODE_UP] ) {
  //   game->man.y -= 10;
  // }
  // if ( state[SDL_SCANCODE_DOWN] ) {
  //   game->man.y += 10;
  // }

  return done;
}

void doRender(SDL_Renderer *renderer, GameState *game){

  if(game->statusState == STATUS_STATE_LIVES){
    draw_status_lives(game);
  }else if(game->statusState == STATUS_STATE_GAME){
    // set the drawing color to blue 
    SDL_SetRenderDrawColor(renderer, 128, 128, 255, 255);

    // Clear the screen (to blue)
    SDL_RenderClear(renderer);

    // set the drawing color to white
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

    for(int i = 0; i < 100; i++){
      SDL_Rect ledgeRect = { game->scrollX+game->ledges[i].x, game->ledges[i].y, game->ledges[i].w, game->ledges[i].h};
      SDL_RenderCopy(renderer, game->brick, NULL, &ledgeRect);
    }

    // draw a rectangle at man's position
    SDL_Rect rect = { game->scrollX+game->man.x, game->man.y, 48, 48 };
    SDL_RenderCopyEx(renderer, game->manFrames[game->man.animFrame], NULL, &rect, 0, NULL, game->man.facingLeft);
    // SDL_RenderFillRect(renderer, &rect);

    if(game->man.isDead){
      SDL_Rect rect = { game->scrollX+game->man.x-24, game->man.y-55, 102, 110 };
      SDL_RenderCopyEx(renderer, game->fire, NULL, &rect, 0, NULL, (game->time%20 < 10));
    }

    // draw the star image
    for(int i = 0; i < 100; i++){
      SDL_Rect starRect = { game->scrollX+game->stars[i].x, game->stars[i].y, 100, 100 };
      SDL_RenderCopy(renderer, game->star, NULL, &starRect);
    }
  }
  // we are done drawning, "present" to the screen  what weve drawn
  SDL_RenderPresent(renderer);
}

// ==================================== main() ++++++++++++++++++++++++++++++++++++++++++++

int main(int argc, char *argv[]){

  GameState gameState;
  SDL_Window *window = NULL;               // Declare a window
  SDL_Renderer *renderer = NULL;           // Declare a renderer
  
  SDL_Init(SDL_INIT_VIDEO | SDL_INIT_JOYSTICK | SDL_INIT_AUDIO);         // Initialize SDL2
	
  gameState.joystick = SDL_JoystickOpen(0);

  if(TTF_Init() == -1) {                                // Initialize SDL2_ttf
      printf("TTF_Init: %s\n", TTF_GetError());
      exit(2);
  }

  srand(time(NULL));

  window = SDL_CreateWindow("Game Window",              // window title
                        SDL_WINDOWPOS_UNDEFINED,        // initial x position
                        SDL_WINDOWPOS_UNDEFINED,        // initial y position
                        640,                            // width, in pixels
                        480,                            // height, in pixels
                        0);                             // flags

  renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
  gameState.renderer = renderer;

  SDL_RenderSetLogicalSize(renderer, 640, 480);

  Mix_OpenAudio(MIX_DEFAULT_FREQUENCY, MIX_DEFAULT_FORMAT, MIX_DEFAULT_CHANNELS, 4096); // initial

  loadGame(&gameState);

  //the window is open: enter program loop (see SDL_PollEvent)
  int done = 0;

  //Event loop
  while(!done){

    done = processEvents(window, &gameState);

    process(&gameState);

    //collision detect
    collisionDetect(&gameState);

    // render display
    doRender(renderer, &gameState);

    // wait a few seconds before quitting
    // SDL_Delay(10);

  }

  // shutdown game and unload all memory
  SDL_DestroyTexture(gameState.star);
  SDL_DestroyTexture(gameState.manFrames[0]);
  SDL_DestroyTexture(gameState.manFrames[1]);
  SDL_DestroyTexture(gameState.brick);
  if(gameState.label1 != NULL){
    SDL_DestroyTexture(gameState.label1);
  }
  TTF_CloseFont(gameState.font);

  Mix_FreeChunk(gameState.bgMusic);
  Mix_FreeChunk(gameState.jumpSound);
  Mix_FreeChunk(gameState.landSound);
  Mix_FreeChunk(gameState.dieSound);

  // Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

  // clean up
  TTF_Quit();
  SDL_Quit();

  return 0;
}