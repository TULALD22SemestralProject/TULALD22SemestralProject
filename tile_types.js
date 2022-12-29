// Returns an array of TileType objects, each containing its URL generated from its index using a template function and allowedTileTypes generated from edge identifiers
function getExistingTilesFromEdges(urlTemplate, edgeTypes, tileEdges) {        
    const SIDES = ['A','B','C','D'];
    const OPPOSITE_SIDES = {A: 'C', B: 'D', C: 'A', D: 'B'}
    
    // Initialize empty Object which contains allowed tile types for each edge type on each side
    const edgeTiles = {};
    SIDES.forEach(side => {
        edgeTiles[side] = {};
        edgeTypes.forEach(type => {
            edgeTiles[side][type] = []; 
        });
    });

    // Create existingTiles
    const existingTiles = [];
    let allowedTileTypes;
    let edge;
    for (let i=0; i<tileEdges.length; i++) {
        // Construct allowedTileTypes as references to edgeTiles and add itself to these lists
        allowedTileTypes = {};
        SIDES.forEach(side => {
            edge = tileEdges[i][side];

            // Allowed tile types on current side is a reference to the list from edgeTiles, which has currentEdge on the opposite side.
            allowedTileTypes[side] = edgeTiles[OPPOSITE_SIDES[side]][edge];

            // Add current index to edgeTiles with currentEdge on the current side
            edgeTiles[side][edge].push(i); 
        });

        // Create the TileType
        existingTiles[i] = new TileType(
            urlTemplate(i),
            allowedTileTypes
        );
    }
}