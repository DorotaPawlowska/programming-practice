#include <stdio.h>
#include "IntArray.h"

void func(){
  // IntArray a;
  IntArray a(100), b(100);

  for(int i = 0; i < 100; i++){
    a.set(i, i*2);
  }
  
  // IntArray c(a);
  IntArray c = a;

  printf("%d\n", a.get(10000000));
  // a.setSize();
  // int i = a.get(n);

}

int main(){

  func();
  
  return 0;
}