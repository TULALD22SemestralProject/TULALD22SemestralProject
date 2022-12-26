// This file can not be run as it contains invalid syntax

// main.js
existingTiles = {A: Tile, B: Tile, C: Tile];


// board.js

class Tile {
  allowedTileTypes = {
    A: []
    B: []
    C: []
    D: []
  };
  url = "/imgs/xx.png"
}

class Board {
  width,
  height,
  tiles = [
    [Tile, Tile, Tile],
    [],
  ];
  addTile(x, y, type) {}
  getAllowedTiles(x,y) {}
  getURL(x,y) {}
}


// generator.js

function generate(board,existingTileTypes)
