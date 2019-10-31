#include <iostream>

class Example{
  public: 
    ~Example(){
      std::cout << "destructor of example" << std::endl;
    }
};

int main(){

  // std::cout << "Hi there" << std::endl;
  auto examle = new Example[100];
  delete []examle;

  return 0;
}