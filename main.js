function generateWorld(grid, width, height, existingTiles) {
    let board = new Board(width, height);
    generate(board, existingTiles);
    fillGrid(grid, board);
}

// Fills a HTML grid element with tiles from a Board
function fillGrid(grid, board) {
    grid.innerHTML = ""; // clear the element

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${board.width}, auto)`;
    
    let image;
    board.tiles.foreach((row) => {
        row.foreach((tile) => {
            image = document.createElement("image");
            image.src = tile.url;
            grid.appendChild(image);
        });
    });
}