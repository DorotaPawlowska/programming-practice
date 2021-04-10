#include <iostream>
#include <string>
using namespace std;

int main(){
  string txt;
  cout << "Jak masz na imie? ";
  cin >> txt;

  if(txt[ txt.size() - 1] == 'a'){
    cout << "Dziewczyna!" << endl;
  } else {
    cout << "Chlopak!" << endl;
  }

  system("PAUSE");
  return 0;
}