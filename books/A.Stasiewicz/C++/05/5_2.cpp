#include <iostream>
#include <cmath>
// #include <math.h> - stara nazwa

using namespace std;

int main(){

  double a;
  cout << "podaj kat w radianach: ";
  cin >> a;
  cout << "sin( " << a << ") = " << sin(a) << endl;
  cout << "cos( " << a << ") = " << cos(a) << endl;
  system("PAUSE");

  return 0;
}