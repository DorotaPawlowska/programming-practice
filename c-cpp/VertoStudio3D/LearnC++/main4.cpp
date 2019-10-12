#include <stdio.h>

struct Big{
  int x, y, z;
  int data[4096];
};

// void func(int *one, int two, float three){
//   *one = 50;
// }

// void funcB(const Big *one){ // pointer
void funcB(Big &one){ // reference parameter
  // one = {};
  one.x = 50;
}

int main(){

  int i = 1, i2 = 3;
  float d = 2.2f;
  Big b;
  b.x = 1;

  // func(&i, i2, f);
  // funcB(&b); // referenc for(*)
  funcB(b);

  printf("%d\n", b.x);

  float f = 5.0f;
  float &fr = f;

  printf("%g\n", f);

  fr = 2.0f;

  printf("%g\n", f);

  return 0;
}