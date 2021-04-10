#include <iostream>
using namespace std;

int main(){
  
  int i = 0, a;

  do{
    a = rand();
    cout << a;
    if( a % 5 == 0){
      cout << " <-- Podzielna przez 5. Koniec.\n";
    }
    cout << endl;
    i++;
  }while(i < 100 && a % 5 != 0);

  system("PAUSE");
  return 0;
}