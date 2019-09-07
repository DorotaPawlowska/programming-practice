#include <stdio.h>

int doubleIt(int number){
  return number * 2;
}

int halveIt(int number){
  return number / 2;
}

int main(int argc, const char *argv[]){
  printf("*** tekst drukowany ***\n");

  int x = 50;
  int go = 1;

  switch(x){
    case 50:
      {
        printf("rezultat case 50: %d\n", x);
      }
    break;
    case 5:
      {
        printf("rezultat case 5: %d\n", x);
      }
    break;
  }

  // for(x = 0; x < 100; x+=3){
  // for(x = 100; x >= 0; x-=3){
  //   printf("rezultat: %d\n", x);
  // }
  
  // x = 1000;
  // while( x > 0){
  //   x-=5;
  //   printf("rezultat: %d\n", x);
  // }

  // do{
  //   x = halveIt(x);

  //   if(x < 2)
  //     go = 0;

  //   printf("rezultat: %d\n", x);
  // }while(go);

  // while(go){
  //   x = halveIt(x);

  //   if(x < 2)
  //     go = 0;

  //   printf("rezultat: %d\n", x);
  // }

  // while(go){
  //   if(x >= 100){
  //     x = halveIt(x);
  //   } else {
  //     x = doubleIt(x);
  //   }
  //   printf("rezultat: %d\n", x);
  // }


  return 0;
}