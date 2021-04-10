#include <iostream>
#include <cmath>
// #include <math.h> - stara nazwa

// using namespace std;

int main(){

  double a;
  std::cout << "podaj kat w radianach: ";
  std::cin >> a;
  std::cout << "sin( " << a << ") = " << sin(a) << std::endl;
  std::cout << "cos( " << a << ") = " << cos(a) << std::endl;
  system("PAUSE");

  return 0;
}