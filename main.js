// Creates a new Board and calls generate() to fill it with tiles and then calls fillGrid that fills a HTML image grid acording to data from the Board  
function generateWorld(grid, width, height, existingTiles) {
    let board = new Board(width, height, existingTiles);
    generate(board, existingTiles);
    fillGrid(grid, board);
}

// Fills a HTML grid element with tiles from a Board
function fillGrid(grid, board) {
    grid.innerHTML = ""; // clear the grid

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${board.width}, auto)`;
    
    let image;
    for (let y=0; y < board.height; y++) {
        for (let x=0; x < board.width; x++) {
            image = document.createElement("img");
            image.src = board.getURL(x,y);
            grid.appendChild(image);
        }
    }
}