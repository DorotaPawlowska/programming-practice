#include <stdio.h>

// operators
void doSomethingWithOperators(){
  int x = 2, y = 5;
  // x+=y;
  x = 3;
  x = x + y;
  y = x - y;
  x = x * y;
  y = x / y;

  x += y;
  x *= y;
  x /= y;
  x -= y;

  x = x + 1;
  x += 1;
  x++;

  x = 5; 
  int z = x++;
  printf("result x++: %d\n", z);

  x = 5; 
  z = ++x;
  printf("result ++x: %d\n", z);

  x = x - 1;
  x -= 1;
  x--;

  x = 1;
  printf("result x : %d\n", x);
  x = !x;
  printf("result !x : %d\n", x);

  // ? :

  printf("result: %d\n", x);
}

int main(){
  printf("jakiś bzdurny tekst ***\n");
  doSomethingWithOperators();
  getchar(); // wait for user to hit enter before quitting program
  return 0;
}