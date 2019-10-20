
class IntArray{
  public:
    // IntArray();
    IntArray(int n);
    IntArray(const IntArray &arr);
    ~IntArray();

    int get(int index);
    void set(int index, int value);

    void operator =(const IntArray &arr);
    void operator =(int i);

    // concatanation of arrays 
    IntArray operator +(const IntArray &arr);

    int &operator[](int i);

  private:
    size_t size;
    int *data;

    bool safetyCheck(int index);
};