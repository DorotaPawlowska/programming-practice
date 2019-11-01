#include <iostream>

using namespace std;

template <typename NumberType>
NumberType powerOf2(NumberType i){
  return i*i;
}

// int powerOf2(int i){
//   return i*i;
// }

// short powerOf2(short i){
//   return i*i;
// }

// uint64_t powerOf2(uint64_t i){
//   return i*i;
// }

// int64_t powerOf2(int64_t i){
//   return i*i;
// }

// float powerOf2(float i){
//   return i*i;
// }

// double powerOf2(double i){
//   return i*i;
// }

int main(){

  // int x = 5;
  // powerOf2(x);

  cout << powerOf2(0.5f) << endl;
  cout << powerOf2(0.5) << endl;
  cout << powerOf2(100u) << endl;
  cout << powerOf2(100ull) << endl;
  // cout << powerOf2("ol la la") << endl;

  

  return 0;
}