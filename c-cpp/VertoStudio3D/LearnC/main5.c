#include <stdio.h>
// #include "include/SDL.h"

typedef struct {
  int x, y;
  short life;
  char *name;
} Man;

void structs(){

  Man man, man2, man3[100] ;

  for(int i = 0; i < 100; i++){
    if(i < 50)
      man3[i].x = i;
    else
      man3[i].x = 200;

    man3[i].y = i*5;
    man3[i].life = 100;
    man3[i].name = "zenek";
  }

  man.x = 50;
  man.y = 50;
  man.life = 100;
  man.name = "Zenek";

  man2.x = 40;
  man2.y = 40;
  man2.life = 100;
  man2.name = "Karolek";

  printf("Name of man %s\n", man.name);
  printf("Name of man %d\n", man3[55].x);
}

int main(int argc, char *argv[]){
  structs();
  return 0;
}