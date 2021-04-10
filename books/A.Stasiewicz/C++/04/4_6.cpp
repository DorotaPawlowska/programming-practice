#include <iostream>

using namespace std;

int main(){
  int a1, a2, a3;
  cout << "Podaj trzy liczby: ";
  cin >> a1 >> a2 >> a3;
  cout.width( 20);
  cout << "pierwsza liczba: ";
  cout.width( 10);
  cout << a1 << endl;
  cout.width( 20);
  cout << "druga liczba: ";
  cout.width( 10);
  cout << a2 << endl;
  cout.width( 20);
  cout << "trzecia liczba: ";
  cout.width(10 );
  cout << a3 << "\n";
  system("PAUSE");
  return 0;
}