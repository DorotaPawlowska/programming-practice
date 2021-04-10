#include <iostream>
using namespace std;

double parabola(double x, double a, double b, double c);

int main(){
  
  double a, b, c, x, y;
  cout << "podaj 3 wspolczynniki paraboli: a, b, c";
  cin >> a >> b >> c;

  cout << "podaj x dla ktorego nalezy wyliczyc wartosc paraboli: ";
  cin >> x;

  y = parabola( x, a, b, c);
  cout << a << " * x * x + " << b << " * x + " << c << " = " << y << endl;

  system("PAUSE");
  return 0;
}

double parabola(double x, double a, double b, double c){
  return a * x * x + b * x + c;
}