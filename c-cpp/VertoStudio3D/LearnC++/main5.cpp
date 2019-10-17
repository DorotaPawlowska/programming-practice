#include <stdio.h>
#include <string>

using namespace std;

int main(){

  // const char *strr = "something";

  string str = "some string";

  // str = str.substr(4);
  str = str.substr(5, 2);

  auto str2 = str;
  str[0] = '4';

  printf("%s\n", str2.c_str());

  printf("%s\n", str.c_str());

  // const char *cstr = str.c_str();
  // printf("%s\n", cstr);

  // for(int i = 0; i < str.length(); i++){
  //   if(i % 2 == 0)
  //     str[i] = '4';
  //   printf("c: %c\n", str[i]);
  // }

  printf("%ld\n", str.length());

  return 0;
}

