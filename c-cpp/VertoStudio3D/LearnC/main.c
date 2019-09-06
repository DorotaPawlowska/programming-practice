// comment
/* 
  comment 
*/

#include <stdio.h>

void explainVariables(){
  // integers
  int x = 0;    // 4 bytes,   -2 billion to +2 billion      (4294967295)
  short y = 0;  // 2 bytes,   -32 thousand to +32 thousand  (65535)
  char z = 0;   // 1 byte,    -127 to 128                   (256)
  char z2 = 'f';   // 1 byte,    -127 to 128                   (256)
  long w = 0;   // 4 bytes
  long long u = 0; // 8 bytes 64-bit

  // unsigned
  unsigned int x2 = 0; // from 0 to 4 billion
  unsigned char z3 = 0; // 0..255

  // floating point (decimals)
  float f = 1.5f;   // 4 bytes;
  double q = 1.50000000000000001;   // 8 bytes

  float f2;
  f2 = 3.0f;

  char *str = "całe zdanie w łańcuchu";
}

void doSomething(){
  int x = 2, y = 5;
  // x = x + y;
  x+= y;
  printf("wynik: %d\n", x);
}

int main(int argc, const char *argv[]){
  explainVariables();
  doSomething();
  printf("Words\n");
  return 0;
}