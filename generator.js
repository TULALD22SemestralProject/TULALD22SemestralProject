

function generate(board){
    for (let i = 0; i < board.height; i++) {
        for (let j = 0; j < board.width; j++) {
            const AllowedArray = board.getAllowedTiles(j,i);
            //picks random tile from allowed
            const randomTile = getRandomTile(AllowedArray);
            //places random tile on the board
            board.addTile(j,i, randomTile);
        }        
    }
}

function getRandomTile(tiles){
    const randomTile = tiles[Math.floor(Math.random()*tiles.length)]
    return randomTile
}
