#include "vertex.h"

  void Vertex::setToZero(){
    x = 0;
    y = 0;
    z = 0;
  }

  void Vertex::set(float vx, float vy, float vz){
    x = vx;
    y = vy;
    z = vz;
  }

  float Vertex::getX(){
    return x;
  }

  float Vertex::getY(){
    return y;
  }

  float Vertex::getZ(){
    return z;
  }

