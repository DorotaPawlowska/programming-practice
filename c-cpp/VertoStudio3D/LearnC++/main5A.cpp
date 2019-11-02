#include <vector>
#include <list>
#include <stdio.h>
#include <cstdlib>
#include <iostream>
#include "SDL2/SDL.h"
#include "SDL2/SDL_image.h"
#include "BouncyBall.h"
#include "Plane.h"

using namespace std;

// #define MAX_OBJECTS 100

#undef main // without this line there is - undefined reference to 'WinMain@16' - error!!

static const int nBalls = 10;
static SDL_Texture *ballTex = nullptr, *planeTex = nullptr;
list<GameObject *> gameObjects;
// int numGameObjects = 0;
// BouncyBall balls[nBalls];
// Plane plane;

int processEvents(SDL_Window *window){
  SDL_Event event;
  int done = 0;

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
        }
      }
      break;
      case SDL_QUIT:
        done = 1;
      break;
    }
  }
  return done;
}

void doUpdate(){

  list<list<GameObject *>::iterator> toDie;
  int numBalls = 0, numPlanes = 0;

  for(auto it = gameObjects.begin(); it != gameObjects.end(); it++){
    auto gameObject = *it;
    gameObject->update();

    Plane *planePtr = dynamic_cast<Plane *>(gameObject);
    BouncyBall *ballPtr = dynamic_cast<BouncyBall *>(gameObject);
    if(ballPtr != nullptr){
      // can use ball safely
      numBalls++;
    } else if(planePtr != nullptr){
      if(planePtr->getX() > 600){
        // //delete plane
        toDie.push_back(it);
      }
      numPlanes++;
    }
  }

  for(auto iit : toDie){
    cout << "delete" << endl;
    delete *iit;
    gameObjects.erase(iit);
  }

  if(numPlanes == 0){
    for(int i = 0; i < 5; i++){
      Plane *plane = new Plane;
      plane->setTexture(planeTex);
      plane->setPos(-100-rand()%150, rand()%380);
      gameObjects.push_back(plane);  
    }
  }
}

void doRender(SDL_Renderer *renderer){
  SDL_SetRenderDrawColor(renderer, 240, 240, 255, 255);
  SDL_RenderClear(renderer);
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  // SDL_Rect rect = {0, 0, 32, 32};
  // SDL_RenderCopy(renderer, ball, nullptr, &rect);

  for(auto gameObject : gameObjects){
    gameObject->draw(renderer);
  }


  // for(int i = 0; i < MAX_OBJECTS;  i++){
  //   if(gameObjects[i]){
  //     gameObjects[i]->draw(renderer);
  //   }
  //   // balls[i].draw(renderer);
  // }
  // plane.draw(renderer);

  SDL_RenderPresent(renderer);
}

int main(int argc, char *argv[]){

  // GameObject obj; // =!!!!  czysta klasa wirtualna
  // GameObject *obj = &plane; // =!!!! ale tak już można ???

  SDL_Window *window = NULL;               // Declare a window
  SDL_Renderer *renderer = NULL;           // Declare a renderer
  
  SDL_Init(SDL_INIT_VIDEO);         // Initialize SDL2

  window = SDL_CreateWindow("Game Window",              // window title
                        SDL_WINDOWPOS_UNDEFINED,        // initial x position
                        SDL_WINDOWPOS_UNDEFINED,        // initial y position
                        640,                            // width, in pixels
                        480,                            // height, in pixels
                        0);                             // flags

  renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);

  auto surface = IMG_Load("ball.png");
  if(surface){
    ballTex = SDL_CreateTextureFromSurface(renderer, surface);
  } else {
    return 1;
  }
  SDL_FreeSurface(surface);

  surface = IMG_Load("plane.png");
  if(surface){
    planeTex = SDL_CreateTextureFromSurface(renderer, surface);
  } else {
    return 1;
  }
  SDL_FreeSurface(surface);

  for(int i = 0; i < nBalls;  i++){
    BouncyBall *ball = new BouncyBall;
    ball->setTexture(ballTex);
    ball->setPos(50+i*32, 100);
    ball->setElasticity((float)i/nBalls);

    gameObjects.push_back(ball);

    // gameObjects[numGameObjects] = ball;
    // numGameObjects++;
  }

  int done = 0;

  while(!done){

    done = processEvents(window);

    doUpdate();

    doRender(renderer);

    SDL_Delay(10);
  }

  // for(int i = 0; i < MAX_OBJECTS;  i++){
  for(auto gameObject : gameObjects){
    // if(gameObjects[i]){
      delete gameObject;
      // gameObjects[i] = nullptr;
    // }
  }
  gameObjects.clear();


  // Close and destroy the window
  SDL_DestroyWindow(window);
  SDL_DestroyRenderer(renderer);

  SDL_DestroyTexture(ballTex);
  SDL_DestroyTexture(planeTex);

  // clean up
  SDL_Quit();

  return 0;
}