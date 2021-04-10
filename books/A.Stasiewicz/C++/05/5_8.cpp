#include <iostream>

using namespace std;

int suma(int, int);

int main(){
  cout << "2+3 = " << suma(2,3) << endl;
  system("PAUSE");
}

int suma(int a, int b){
  return a + b;
}