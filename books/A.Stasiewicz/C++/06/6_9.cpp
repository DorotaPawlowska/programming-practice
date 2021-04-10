#include <iostream>
using namespace std;

int main(){
  
  double a, b;
  cout << "podaj liczbe a: ";
  cin >> a;
  cout << "podaj liczbe b: ";
  cin >> b;

  if(a < b){
    cout << " a < b \n";
  } else if ( a == b) {
    cout << " a = b \n";
  } else {
    cout << " a > b \n";
  }

  system("PAUSE");
  return 0;
}