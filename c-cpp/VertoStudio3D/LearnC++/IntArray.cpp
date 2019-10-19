#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "IntArray.h"

/*
IntArray::IntArray(){
  printf("new int array %p", this);
} */

IntArray::IntArray(int n){
  // printf("new int array of size %d (%p)\n", n, this);
  
  printf("alloc of %p\n", this);
  
  size = n;
  data = (int *)malloc(sizeof(int)*n);
}

IntArray::IntArray(const IntArray &arr){
  size = arr.size;
  data = (int *)malloc(sizeof(int)*size);

  printf("copy constructor from %p to %p\n", &arr, this);

  memcpy(data, arr.data, sizeof(int)*size);
}

IntArray::~IntArray(){
  printf("dealloc of %p\n", this);
  
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