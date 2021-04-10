#include <iostream>
using namespace std;

int main(){
  
  char c = ' ';
  cout << "klawisz k - koniec pisania" << endl;

  for( ; c != 'k'; ){
    cin >> c;
  }

  system("PAUSE");
  return 0;
}