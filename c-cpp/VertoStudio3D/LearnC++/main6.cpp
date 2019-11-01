#include <string>
#include <stdio.h>
#include <iostream>
#include "Array.h"

using namespace std;

Array<float> *createArray(){
  // Array a;
  Array<float> a(100), b(200);

  for(int i = 0; i < 100; i++){
    a.set(i, i*2);
  }

  for(int i = 0; i < 200; i++){
    b.set(i, i*4);
  }
  

  // Array c(a);
  // Array c = a;

  // ----------- Operator Overloading

  // Array c(1);
  // c = a;
  // c = 5;

  // Array c = a;
  //+,-,<,<=,!,(),[],(int)x, = itp.
  // int i = 1, j = 2;
  // int r;
  //i.operator+(j);
  //r.operator=(i+j);
  //r.operator=(i.operator+(j));
  // r = i + j;
  //i.operator!();
  // !i;

  // Array c = a + b;
  // string s1 = "hi ";
  // string s2 = "there";
  // string s3 = s1 + s2;

  // c[101].operator =(50);

  Array<float> *c = new Array<float>(a+b);
  // (*c)[101] = 50;
  c->set(101, 50);
  return c;

  // printf("%d\n", a.get(10));
  // printf("%d\n", c.get(10));
  // printf("%d\n", c.get(0));
  // printf("%d\n", c.get(101));
  // printf("%d\n", c[101]);
  // printf("%s\n", s3.c_str());
  // a.setSize();
  // int i = a.get(n);

}

int main(){

  Array<float> *result = createArray();

  cout << result->get(101) << endl;

  delete result;  
  return 0;
}