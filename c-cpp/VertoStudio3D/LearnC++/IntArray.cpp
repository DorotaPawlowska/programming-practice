#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "IntArray.h"

static int dummy = 0;

/*
IntArray::IntArray(){
  printf("new int array %p", this);
} */

IntArray::IntArray(int n){
  // printf("new int array of size %d (%p)\n", n, this);
  
  // printf("alloc of %p\n", this);
  
  size = n;
  data = new int[n];//(int *)malloc(sizeof(int)*n);
}

IntArray::IntArray(const IntArray &arr){

  data = nullptr;

  // this->operator = (arr); // NO NO NO
  *this = arr;

  // size = arr.size;
  // data = (int *)malloc(sizeof(int)*size);

  // printf("copy constructor from %p to %p\n", &arr, this);

  // memcpy(data, arr.data, sizeof(int)*size);
}

void IntArray::operator =(const IntArray &arr){
  if(data)
    delete data;
    // free(data);

  size = arr.size;
  data = new int[size]; //(int *)malloc(sizeof(int)*size);

  // printf("assignment operator from %p to %p\n", &arr, this);

  memcpy(data, arr.data, sizeof(int)*size);
}

void IntArray::operator =(int i){
  IntArray  tmp(1);
  tmp.set(0, i);
  *this = tmp;
}

IntArray IntArray::operator +(const IntArray &arr){
  IntArray ret(size+arr.size);

  memcpy(ret.data, data, size*sizeof(int));
  memcpy(ret.data+size, arr.data, size*sizeof(int));

  return ret;
}

int &IntArray::operator[](int index){
  if(!safetyCheck(index))
    return dummy;
  return data[index];
}


IntArray::~IntArray(){
  // printf("dealloc of %p\n", this);
  
  free(data);
}

int IntArray::get(int index){
  if(!safetyCheck(index))
    return 0;
  return data[index];
}

void IntArray::set(int index, int value){
  if(safetyCheck(index)){
    data[index] = value;
  }
}

bool IntArray::safetyCheck(int index){
  return (index >= 0 && index < size);
}