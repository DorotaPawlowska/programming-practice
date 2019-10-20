#include <string>
#include <stdio.h>
#include "IntArray.h"

using namespace std;

void func(){
  // IntArray a;
  IntArray a(100), b(200);

  for(int i = 0; i < 100; i++){
    a.set(i, i*2);
  }

  for(int i = 0; i < 200; i++){
    b.set(i, i*4);
  }
  

  // IntArray c(a);
  // IntArray c = a;

  // ----------- Operator Overloading

  // IntArray c(1);
  // c = a;
  // c = 5;

  // IntArray c = a;
  //+,-,<,<=,!,(),[],(int)x, = itp.
  // int i = 1, j = 2;
  // int r;
  //i.operator+(j);
  //r.operator=(i+j);
  //r.operator=(i.operator+(j));
  // r = i + j;
  //i.operator!();
  // !i;

  IntArray c = a + b;
  string s1 = "hi ";
  string s2 = "there";
  string s3 = s1 + s2;

  // c[101].operator =(50);
  c[101] = 50;

  // printf("%d\n", a.get(10));
  // printf("%d\n", c.get(10));
  // printf("%d\n", c.get(0));
  printf("%d\n", c.get(101));
  printf("%d\n", c[101]);
  // printf("%s\n", s3.c_str());
  // a.setSize();
  // int i = a.get(n);

}

int main(){

  func();
  
  return 0;
}