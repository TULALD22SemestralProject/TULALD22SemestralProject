function getExistingTilesFromEdges(urlTemplate, edgeTypes, tileEdges) {        
    const SIDES = ['A','B','C','D'];
    
    const edgeTiles = {};
    SIDES.forEach(side => {
        const edgeTiles[side] = {};
        edgeTypes.forEach(type => {
            const edgeTiles[side][type] = []; 
        });
    });

    const existingTiles = [];
    let allowedTileTypes;
    for (let i=0; i<tileEdges.length, i++) {
        allowedTileTypes = {};
        SIDES.forEach(side => {
            allowedTileTypes[side] = edgeTiles[side][tileEdges[side][type]];
            allowedTileTypes[side].push(i);
        });

        existingTiles[i] = new TileType(
            urlTemplate(i),
            allowedTileTypes
        );
    }
}