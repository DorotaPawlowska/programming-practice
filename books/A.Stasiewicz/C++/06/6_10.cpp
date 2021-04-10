#include <iostream>
using namespace std;

int main(){
  
  double a;
  cout << "powiedz mi ile zarabiasz ... ";
  cin >> a;

  if(a < 100){
    cout << "malo ...\n";
  } else if ( a < 500) {
    cout << " starczy na waciki ...\n";
  } else if ( a < 1000){
    cout << " starczy na trzy paczki wacikow  ...\n";
  } else {
    cout << " a co to za kwota? ...\n";
  }

  system("PAUSE");
  return 0;
}