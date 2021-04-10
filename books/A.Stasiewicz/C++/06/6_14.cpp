#include <iostream>
#include <cmath>
using namespace std;

int main(){
  
  double x;
  cout.precision( 4);

  for( x = 0; x >= -1; x -= 0.01){
    cout.width( 5);
    cout << sin( x) << endl;
  }

  system("PAUSE");
  return 0;
}