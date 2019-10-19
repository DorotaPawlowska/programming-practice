
class IntArray{
  public:
    // IntArray();
    IntArray(int n);
    IntArray(const IntArray &arr);
    ~IntArray();

    int get(int index);
    void set(int index, int value);

  private:
    size_t size;
    int *data;

    bool safetyCheck(int index);
};