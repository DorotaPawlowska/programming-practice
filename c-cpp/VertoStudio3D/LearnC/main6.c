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

  // load fonts
  game->font = TTF_OpenFont("C:\\Users\\Administrator\\Desktop\\GitHub\\mojeWprawki\\programming-practice\\c-cpp\\VertoStudio3D\\LearnC\\fonts\\crazy.ttf", 48);
  if(!game->font){
    printf("Cannot find font file!\n\n");
    SDL_Quit();
    exit(1);
  }

  game->label = NULL;

  game->man.x = 320-40;
  game->man.y = 240-40;
  game->man.dy = 0;
  game->man.dx = 0;
  game->man.onLedge = 0;
  game->man.animFrame = 0;
  game->man.facingLeft = 0;
  game->man.slowingDown = 0;
  game->statusState = STATUS_STATE_LIVES;

  init_status_lives(game);
  
  game->time = 0;

  for(int i = 0; i < 100; i++){
    game->stars[i].x = rand()%640;
    game->stars[i].y = rand()%480;
  }

  // init ledges
  for(int i = 0; i < 100; i++){
    game->ledges[i].w = 256;
    game->ledges[i].h = 64;
    game->ledges[i].x = i*256;
    game->ledges[i].y = 400;
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

  if(game->time > 122){
    init_status_lives(game);
    game->statusState = STATUS_STATE_GAME;
  }

  if(game->statusState != STATUS_STATE_GAME){
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

}

void collisionDetect(GameState *game){
  //check for collision with any ledges (brick blocks)
  for(int i = 0; i < 100; i++){
    float mw = 48, 
          mh = 48;
    float mx = game->man.x,
          my = game->man.y;
    float bx = game->ledges[i].x, 
          by = game->ledges[i].y,
          bw = game->ledges[i].w,
          bh = game->ledges[i].h;

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
        game->man.onLedge = 1; 
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
      SDL_Rect ledgeRect = { game->ledges[i].x, game->ledges[i].y, game->ledges[i].w, game->ledges[i].h};
      SDL_RenderCopy(renderer, game->brick, NULL, &ledgeRect);
    }

    // draw a rectangle at man's position
    SDL_Rect rect = { game->man.x, game->man.y, 48, 48 };
    SDL_RenderCopyEx(renderer, game->manFrames[game->man.animFrame], NULL, &rect, 0, NULL, game->man.facingLeft);
    // SDL_RenderFillRect(renderer, &rect);

    // draw the star image
    // for(int i = 0; i < 100; i++){
    //   SDL_Rect starRect = { game->stars[i].x, game->stars[i].y, 100, 100 };
    //   SDL_RenderCopy(renderer, game->star, NULL, &starRect);
    // }
  }
    


  // we are done drawning, "present" to the screen  what weve drawn
  SDL_RenderPresent(renderer);
}

// ==================================== main() ++++++++++++++++++++++++++++++++++++++++++++

int main(int argc, char *argv[]){

  GameState gameState;
  SDL_Window *window = NULL;               // Declare a window
  SDL_Renderer *renderer = NULL;           // Declare a renderer
  
  SDL_Init(SDL_INIT_VIDEO);         // Initialize SDL2
	
  if(TTF_Init()==-1) {                                // Initialize SDL2_ttf
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

  loadGame(&gameState);

  //the window is open: enter program loop (see SDL_PollEvent)
  int done = 0;

  //Event loop
  while(!done){

    done = processEvents(window, &gameState);

    process(&gameState);

    //colision detect
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
  if(gameState.label != NULL){
    SDL_DestroyTexture(gameState.label);
  }
  TTF_CloseFont(gameState.font);

  // Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

  // clean up
  TTF_Quit();
  SDL_Quit();

  return 0;
}