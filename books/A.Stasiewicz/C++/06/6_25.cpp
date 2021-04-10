#include <iostream>
using namespace std;

int main(){
  int i = 0, a;
  while( true ){
    a = rand();
    if( a % 2 == 0) continue;
    if( a % 3 == 0) continue;
    cout << a << endl;
    i++;
    if(i == 5) break;
  }
  system("PAUSE");
  return 0;
}