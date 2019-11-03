#include <unordered_map>
#include <string>
#include "SDL2/SDL.h"

class TextureManager{
  public:
    ~TextureManager();

    // must be done before you can use this class
    static void setRenderer(SDL_Renderer *r);

    void setTexture(const std::string &name, SDL_Texture *tex);
    SDL_Texture *getTexture(const std::string &name);

    void dropTexture(const std::string &name);

  private:
    std::unordered_map<std::string, SDL_Texture *> textures;
    static SDL_Renderer *renderer;
};