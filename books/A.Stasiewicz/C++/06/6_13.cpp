#include <iostream>
#define _USE_MATH_DEFINES
#include <cmath>
using namespace std;

int main(){
  
  double i, a;
  cout.precision( 4);

  for( i = 0; i <= 180; i += 10){
    a = sin( M_PI / 180.0 * i );
    cout.width( 5);
    cout << i << " | ";
    cout.width( 10);
    cout << a << endl;
  }

  system("PAUSE");
  return 0;
}