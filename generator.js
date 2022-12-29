

function generate(board, existingTileTypes){
    for (let i = 0; i < board.height; i++) {
        for (let j = 0; j < board.width; j++) {
            const AllowedArray = board.getAllowedTiles(j,i);
            //reset if wrongly generated
            if(AllowedArray.length == 0){
                board.clear();
                i = -1;
                j = 0;
                break;
            }
            //picks random tile from allowed
            let randomTile = getRandomTile(AllowedArray);
            //places random tile on the board
            board.addTile(j,i, randomTile);
        }        
    }
}

function getRandomTile(tiles){
    let randomTile = tiles[Math.floor(Math.random()*tiles.length)]
    return randomTile
}
