#include <iostream>

using namespace std;

int main(){

  double a;
  cout << "Podaj liczbe rzeczywista z kropka: ";
  cin >> a; // pobranie liczby i wpisanie jej do zmiennej
  cout.precision( 2);
  cout << "1 / " << a << " = " << 1/a << endl;
  system("PAUSE");
  return 0;
}