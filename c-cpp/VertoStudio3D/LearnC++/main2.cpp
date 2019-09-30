#include <stdio.h>

void print(float f){
  printf("log: %f\n", f);
  }

void print(int i){
  printf("log: %d\n", i);
  }

void print(const char *str){
  printf("log: %s\n", str);
}

int main(){

  print("hi there");
  print(0.5f);
  print(4);

  return 0;
}