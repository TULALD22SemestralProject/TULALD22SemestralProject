// This file can not be run as it contains invalid syntax

// main.js
existingTileTypes = [Tile, Tile, Tile];


// board.js

class TileType {
  allowedTileTypes = {
    A: []
    B: []
    C: []
    D: []
  };
  url = "/imgs/xx.png",
  constuctor(url, allowedTileTypes);
}

class Board {
  width,
  height,
  tiles = [
    [TileType, TileType, TileType],
    [],
  ];
  constructor(width, height, existingTiles)
  addTile(x, y, type) {}
  getAllowedTiles(x,y) {}
  getURL(x,y) {},
}


// generator.js

function generate(board, existingTileTypes)
