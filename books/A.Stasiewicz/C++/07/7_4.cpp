#include <iostream>
using namespace std;

void twoje_dane( void);

int main(){
  
  twoje_dane();
  cout << endl << endl;
  twoje_dane();

  system("PAUSE");
  return 0;
}

void twoje_dane( void){
  cout << "imie i nazwisko: Jan Kowalski" << endl;
  cout << "wiek           : 23" << endl;
  cout << "zawod          : programista AI" << endl;
}