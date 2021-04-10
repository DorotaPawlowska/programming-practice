#include <iostream>
using namespace std;

int main(){
  
  char c;
  cout << "klawisz k - koniec pisania" << endl;

  do{
    cin >> c;
  }while( c != 'k');

  system("PAUSE");
  return 0;
}