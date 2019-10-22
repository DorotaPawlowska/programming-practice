#include <iostream>

using namespace std;

static int numberOfAdditions = 0;

class EncapsulatedInt{
  public: 
    EncapsulatedInt(){}

    EncapsulatedInt(int someInt){
      i = someInt;
    }

    EncapsulatedInt operator+(const EncapsulatedInt &rhs){
      numberOfAdditions++;
      return EncapsulatedInt(i + rhs.i);
    }

    // implicit conversion
    operator int(){
      return i;
    }

  private:
    int i = 0;
};

void func(int i){
  cout << "func gets: " << i << endl;
}

int main(){

  EncapsulatedInt a, b(10);
  auto c = a + b + a;

  int i = c;
  func(c);

  cout << "number of additions: " << numberOfAdditions << endl;

  return 0;
}