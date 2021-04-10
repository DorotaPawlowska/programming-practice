#include <iostream>
#include <cstdlib>
#include <windows.h>

using namespace std;

int main(){

  HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);
  SetConsoleTextAttribute(h, FOREGROUND_GREEN);
  cout << "hello mord!" << endl;
  SetConsoleTextAttribute(h, FOREGROUND_BLUE);
  cout << "hello mord!" << endl;
  SetConsoleTextAttribute(h, FOREGROUND_RED);
  cout << "hello mord!" << endl;
  SetConsoleTextAttribute(h, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED | FOREGROUND_INTENSITY);
  cout << "hello mord!" << endl;

  SetConsoleTextAttribute(h, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED );
  system("PAUSE");
  return EXIT_SUCCESS;
}