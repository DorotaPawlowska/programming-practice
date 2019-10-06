#include <stdio.h>
#include "vertex.h"

/*
class Vertex{
  private:
    float x, y, z;

  public:
    void setToZero(){
      x = 0;
      y = 0;
      z = 0;
    }

    void set(float vx, float vy, float vz){
      x = vx;
      y = vy;
      z = vz;
    }

    float getX(){
      return x;
    }

    float getY(){
      return y;
    }

    float getZ(){
      return z;
    }
};
*/

/*
struct VertexStruct{
  // defoult is public:
  float x, y, z;

  void setToZero(){
    x = 0;
    y = 0;
    z = 0;
  }

  void set(float vx, float vy, float vz){
    x = vx;
    y = vy;
    z = vz;
  }
};
*/

int main(){

  // VertexStruct v, v2;
  Vertex v;

  // v.x = 0;
  // v.y = 1;
  // v.z = 2;

  // v2.x = 3;
  v.setToZero();
  v.set(1,2,3);

  printf("x -> %g\n", v.getX());
  printf("y -> %g\n", v.getY());
  printf("z -> %g\n", v.getZ());

  return 0;
}