#include "GameObject.h"

GameObject::GameObject(){

}

void GameObject::setPos(float x, float y){
  this->x = x;
  this->y = y;
}

float GameObject::getX(){
  return x;
}

float GameObject::getY(){
  return y;
}