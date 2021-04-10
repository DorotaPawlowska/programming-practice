#include <iostream>
using namespace std;

int main(){

  double a;
  cout << "podaj jakas liczbe: ";
  cin >> a;

  if( a < 0 ) cout << "Ujemna!\n";
  else cout << "Nieujemna\n";

  system("PAUSE");
  return 0;
}
