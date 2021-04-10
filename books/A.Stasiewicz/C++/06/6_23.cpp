#include <iostream>
using namespace std;

int main(){
  int i, a;
  for(i = 0; i< 20; i++){
    a = rand();
    if( a % 2 != 0) continue;
    cout << a << endl;
  }
  system("PAUSE");
  return 0;
}