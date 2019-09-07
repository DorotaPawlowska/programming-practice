#include <stdio.h>
#include <limits.h>

short max(const short array[], int n){

  short ret = 0;

  for(short i = 0; i < n; i++){
    if(array[i] > ret){
      ret = array[i];
    }
  }
  // array[0] = 69;

  return ret;
}

int main(int argc, const char *argv[]){

  short array[10] = {1,2,3,4,5,16,7,8,9,10};
  // int array1, array2; // no no no

  printf("Max element: %i\n", max(array, 10));
  printf("%d\n",array[0]);

  // for(int i = 0; i < 10; i++){
  //   array[i] = i*2;
  //   printf("%d\n",array[i]);
  // }

  // array[0] = 123;
  // printf("%d\n",array[0]);
  // printf("%d\n",array[9]);

  return 0;
}