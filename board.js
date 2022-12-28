class Board{
    constructor(width, height, existingTiles){
        this.width=width;
        this.height=height;
        this.existingTiles=existingTiles;
        this.tiles = [];
        for(let a=0;a<width;a++){
            this.tiles.push([]);
            for(let b=0;b<height;b++){
                this.tiles[a][b]=null;
            }
        }
    }
    
    addTile(x,y,type){
        this.tiles[x][y]=existingTiles[type];
    }
    
    getURL(x,y) {
        return tiles[x][y].getURL();
    }
    
    getAllowedTiles(x,y){
    allowedTiles = [];
    
    for(let i = 0; i < existingTiles.length;i++){
     if(x<=0 || tiles[x-1][y]==null || searchArray(i,tiles[x-1][y].getAllowedTileTypes().A)){
        if(y<=0 ||tiles[x][y-1]==null || searchArray(i,tiles[x][y-1].getAllowedTileTypes().D)){
            if(x>=width-1 || tiles[x+1][y]==null || searchArray(i,tiles[x+1][y].getAllowedTileTypes().C)){
                if(y>=height-1 || tiles[x][y+1]==null || searchArray(i,tiles[x+1][y].getAllowedTileTypes().B)){
                    allowedTiles.push(i);
                }
            }
        }
      }
     }
     return allowedTiles;
    }
    
    clear(){
        for(let a = 0; a<width;a++){
            for(let b = 0; b<height;b++){
                tiles[a][b]=null;
            }
        }
    }
    
    searchArray(a,arr){
        bol = false;
        for(let i=0;i<arr.length;i++){
            if(a == arr[i]){
                return true;
            }
        }
        return false;
    }
}