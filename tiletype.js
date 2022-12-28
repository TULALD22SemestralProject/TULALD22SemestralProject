class TileType {
  constructor(url,allowedTileTypes) {
    this.url = url;
    this.allowedTileTypes = allowedTileTypes;
  }
  
  getAllowedTileTypes(){
      return this.allowedTileTypes;
  }
  
  getURL(){
      return this.url;
  }
}