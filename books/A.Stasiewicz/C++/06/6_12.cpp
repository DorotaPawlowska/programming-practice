#include <iostream>
using namespace std;

int main(){
  
  int i =1, a = 1;

  for( ; i <= 10; ){
    a *= i;
    ++i;
  }

  cout << "1 * 2 * ... * 10 = " << a << endl;

  system("PAUSE");
  return 0;
}