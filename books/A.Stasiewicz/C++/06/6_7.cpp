#include <iostream>
using namespace std;

int main(){
  
  char znak;
  cout << "podaj jakas litere ";
  cin >> znak;

  switch(znak){
  case 'a':
  case 'A': 
    cout << "A jak Ania\n";
    break;
  case 'b': 
  case 'B': 
    cout << "B jak Bartek\n";
    break;
  case 'c': 
  case 'C': 
    cout << "C jak Cecylia\n";
    break;
  default: 
    cout << "nie jestem przugotowany na litere: " << znak << endl;
    break;
  }

  system("PAUSE");
  return 0;
}