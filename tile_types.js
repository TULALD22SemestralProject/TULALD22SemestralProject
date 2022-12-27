function getExistingTilesFromEdges(urlTemplate, edgeTypes, tileEdges) {        
    const SIDES = ['A','B','C','D'];
    const OPPOSITE_SIDES = {A: 'C', B: 'D', C: 'A', D: 'B'}
    
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
            allowedTileTypes[side] = edgeTiles[OPPOSITE_SIDES[side]][tileEdges[i][side]];
            allowedTileTypes[side].push(i);
        });

        existingTiles[i] = new TileType(
            urlTemplate(i),
            allowedTileTypes
        );
    }
}