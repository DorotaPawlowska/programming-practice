#include <iostream>
#include <cmath>
using namespace std;

int main(){
  
  double a;
  char znak;
  cout << "podaj liczbe: ";
  cin >> a;
  cout << "1 - sinus, 2 - cosinus, 3 - kwadrat: ";
  cin >> znak;
  cout.precision(2);

    switch(znak){
    case '1': cout << "sin( " << a << " ) = " << sin(a) << endl;
      break;
    case '2': cout << "cos( " << a << " ) = " << cos(a) << endl;
      break;
    case '3': cout << a << " * " << a << " = " << a * a << endl;
      break;
    default: cout << "niezdefiniowana operacja" << znak << endl;
  }

  system("PAUSE");
  return 0;
}