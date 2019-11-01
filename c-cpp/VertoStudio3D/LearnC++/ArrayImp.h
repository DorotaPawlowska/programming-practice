#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// #include "Array.h"

static int dummy = 0;
/*
Array::Array(){
  printf("new int array %p", this);
} */

template <typename T>
Array<T>::Array(int n){
  // printf("new int array of size %d (%p)\n", n, this);
  
  // printf("alloc of %p\n", this);
  
  size = n;
  data = new T[n];//(int *)malloc(sizeof(int)*n);
}

template <typename T>
Array<T>::Array(const Array &arr){

  data = nullptr;

  // this->operator = (arr); // NO NO NO
  *this = arr;

  // size = arr.size;
  // data = (int *)malloc(sizeof(int)*size);

  // printf("copy constructor from %p to %p\n", &arr, this);

  // memcpy(data, arr.data, sizeof(int)*size);
}

template <typename T>
void Array<T>::operator =(const Array &arr){
  if(data)
    delete []data;
    // free(data);

  size = arr.size;
  data = new T[size]; //(int *)malloc(sizeof(int)*size);

  // printf("assignment operator from %p to %p\n", &arr, this);

  memcpy(data, arr.data, sizeof(T)*size);
}

template <typename T>
void Array<T>::operator =(T i){
  Array  tmp(1);
  tmp.set(0, i);
  *this = tmp;
}

template <typename T>
Array<T> Array<T>::operator +(const Array &arr){
  Array ret(size+arr.size);

  memcpy(ret.data, data, size*sizeof(T));
  memcpy(ret.data+size, arr.data, size*sizeof(T));

  return ret;
}

template <typename T>
T &Array<T>::operator[](int index){
  if(!safetyCheck(index))
    return dummy;
  return data[index];
}

template <typename T>
Array<T>::~Array(){
  // printf("dealloc of %p\n", this);
  delete []data;
  // free(data);
}

template <typename T>
T Array<T>::get(int index){
  if(!safetyCheck(index))
    return 0;
  return data[index];
}

template <typename T>
void Array<T>::set(int index, T value){
  if(safetyCheck(index)){
    data[index] = value;
  }
}

template <typename T>
bool Array<T>::safetyCheck(int index){
  return (index >= 0 && index < size);
}