#include <iostream>
using namespace std;

int main(){
  
  double a;
  cout << "podaj jakas liczbe: ";
  cin >> a;

  if( a > 0 ) {
    cout << "Dodatnia!\n";
    cout << "Dziekuje\n";
  } else {
    cout << "nie jest dodatnia\n";
  }
  system("PAUSE");
  return 0;
}