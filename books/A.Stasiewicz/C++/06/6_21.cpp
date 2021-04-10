#include <iostream>
using namespace std;

int main(){
  
  int i, a;

  for( i = 0; i < 100; i++){
    a = rand();
    cout << a;
    if( a % 5 == 0){
      cout << " <-- Podzielna przez 5. Koniec.\n";
      break;
    }
    cout << endl;
  }

  system("PAUSE");
  return 0;
}