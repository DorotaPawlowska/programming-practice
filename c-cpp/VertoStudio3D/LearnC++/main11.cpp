#include <iostream>
#include <stdlib.h>

struct Rect{
  int x, y, w, h;
};

int main(){

  // c - way
  // unsigned char *ptr = (unsigned char *)malloc(1024);
  // free(ptr);

  // c++ - way
  // unsigned char *ptr2 = new unsigned char[1024];
  // delete ptr2;

  // float *fptr = new float[1024];
  // delete fptr;

  // short *sh = new short;
  // delete sh;

// ------------

  // c - way
  Rect *re = (Rect *)malloc(sizeof(Rect));
  free(re);

  // c++ - way
  Rect *rec = new Rect;
  delete rec;


  return 0;
}