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
        this.tiles[x][y]=this.existingTiles[type];
    }
    
    getURL(x,y) {
        return this.tiles[x][y].getURL();
    }
    
    getAllowedTiles(x,y){
    let allowedTiles = [];
    
    for(let i = 0; i < existingTiles.length;i++){
     if(x<=0 || this.tiles[x-1][y]==null || this.searchArray(i,this.tiles[x-1][y].getAllowedTileTypes().C)){
        if(y<=0 || this.tiles[x][y-1]==null || this.searchArray(i,this.tiles[x][y-1].getAllowedTileTypes().D)){
            if(x>=this.width-1 || this.tiles[x+1][y]==null || this.searchArray(i,this.tiles[x+1][y].getAllowedTileTypes().A)){
                if(y>=this.height-1 || this.tiles[x][y+1]==null || this.searchArray(i,this.tiles[x+1][y].getAllowedTileTypes().B)){
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
                this.tiles[a][b]=null;
            }
        }
    }
    
    searchArray(a,arr){
        let bol = false;
        for(let i=0;i<arr.length;i++){
            if(a == arr[i]){
                return true;
            }
        }
        return false;
    }
}