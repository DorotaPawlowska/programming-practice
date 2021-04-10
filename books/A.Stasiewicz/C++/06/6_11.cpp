#include <iostream>
using namespace std;

int main(){
  
  int i, suma = 0;

  for(i = 1; i <= 1000; i++){
    suma += i;
  }
  cout << "1 + 2 + ... + 1000 = " << suma << endl;

  system("PAUSE");
  return 0;
}