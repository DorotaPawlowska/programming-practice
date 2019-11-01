
template <typename T>
class Array{
  public:
    // Array();
    Array(int n);
    Array(const Array &arr);
    ~Array();

    T get(int index);
    void set(int index, T value);

    void operator =(const Array &arr);
    void operator =(T i);

    // concatanation of arrays 
    Array operator +(const Array &arr);

    T &operator[](int i);

  private:
    size_t size;
    T *data = nullptr;

    bool safetyCheck(int index);
};

#include "ArrayImp.h"