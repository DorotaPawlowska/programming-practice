#include <iostream>
using namespace std;

int main(){
  
  int a;
  cout << "podaj ulubiona cyfre ";
  cin >> a;

  switch(a){
    case 0: cout << "dosc niski nominal\n";
      break;
    case 1: cout << "dalej troche niski nominal\n";
      break;
    case 2: cout << "no teraz juz mozna cos z tym zrobic\n";
      break;
    default: cout << "nie znam takiej cyfry!\n";
  }
  system("PAUSE");
  return 0;
}