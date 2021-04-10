#include <iostream>
#include <cstdlib>
#include <windows.h>

using namespace std;

int main(){

  Beep( 1000, 300);
  Beep( 2000, 300);
  Beep( 3000, 300);

  system("PAUSE");
  return EXIT_SUCCESS;
}