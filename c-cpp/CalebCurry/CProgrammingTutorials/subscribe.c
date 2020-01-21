#include <stdio.h>

int main(){
  int radius;
  printf("please enter a radius:");
  scanf("%d", &radius); // address of operator

  float area = 3.14159 * (radius * radius);

  printf("the area of a circle with %d radius is %f\n", radius, area);
  return 0;
}

// space insensitive language