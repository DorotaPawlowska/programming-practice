#include <iostream>
#include <vector>
#include <list>

using namespace std;

int main(){

  // vector<int> someVecor = { 0, 2, 3, 4, 5 };
  list<int> someVecor;
  someVecor.push_back(0);
  someVecor.push_back(2);
  someVecor.push_back(3);
  someVecor.push_back(4);
  someVecor.push_back(5);
  someVecor.push_front(5);

// list<int>::iterator
  auto it = ++someVecor.begin();
  someVecor.insert(it, 66);

  vector<int> v2(100);
  v2[0] = 5;
  v2[50] = 6;

  // for(vector<int>::iterator it = someVecor.begin(); it != someVecor.end(); it++){
  //   // int &i = *it;
  //   // cout << i << endl;

  //   cout << *it << endl;
  // }

  // for(int i : someVecor){
  //   i = 0;
  //   cout << i << endl;
  // }

  for(int &i : someVecor){
    cout << i << endl;
  }

  // for(int i = 0; i < someVecor.size(); i++){
  //   cout << someVecor[i] << endl;
  // }

  // iterator
  // list<int>::iterator it = someVecor.begin();

  // cout << *it << endl;
  // it++;
  // cout << *it << endl;
  // only for vectors
  // it += 2;
  // cout << *it << endl;
  // it++;
  // it++;
  // cout << *it << endl;
  // it++;
  // cout << *it << endl;
  // it++;
  // cout << *it << endl;



  return 0;
}