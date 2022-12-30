const TILE_URL_TEMPLATE = (i) => `tiles_terrain/${String(i).padStart(3, '0')}.jpg`;

const TILE_EDGE_TYPES = [
    "water",
    "beach",
    "grass",
    "water_beach",
    "beach_water",
    "water_grass",
    "grass_water",
    "beach_grass",
    "grass_beach"
];

const existingTiles = getExistingTilesFromEdges(
    TILE_URL_TEMPLATE,
    TILE_EDGE_TYPES,
    [
        // 0
        {
            A: "water",
            B: "water",
            C: "water",
            D: "water"
        },

        // 1
        {
            A: "water",
            B: "water",
            C: "water",
            D: "water"
        },

        // 2
        {
            A: "water",
            B: "water",
            C: "water",
            D: "water"
        },

        // 3
        {
            A: "water",
            B: "water",
            C: "water",
            D: "water"
        },

        // 4
        {
            A: "water",
            B: "water_beach",
            C: "beach_water",
            D: "water"
        },

        // 5
        {
            A: "water",
            B: "water",
            C: "water_beach",
            D: "water_beach"
        },

        // 6
        {
            A: "water_beach",
            B: "water",
            C: "water",
            D: "beach_water"
        },

        // 7
        {
            A: "beach_water",
            B: "beach_water",
            C: "water",
            D: "water"
        },

        // 8
        {
            A: "beach_water",
            B: "beach",
            C: "beach_water",
            D: "water"
        },

        // 9
        {
            A: "water",
            B: "water_beach",
            C: "beach",
            D: "water_beach"
        },

        // 10
        {
            A: "water_beach",
            B: "water",
            C: "water_beach",
            D: "beach"
        },

        // 11
        {
            A: "beach",
            B: "beach_water",
            C: "water",
            D: "beach_water"
        },

        // 12
        {
            A: "beach_water",
            B: "beach",
            C: "beach",
            D: "water_beach"
        },

        // 13
        {
            A: "water_beach",
            B: "water_beach",
            C: "beach",
            D: "beach"
        },

        // 14
        {
            A: "beach",
            B: "beach_water",
            C: "water_beach",
            D: "beach"
        },

        // 15
        {
            A: "beach",
            B: "beach",
            C: "beach_water",
            D: "beach_water"
        },

        // 16
        {
            A: "beach",
            B: "beach",
            C: "beach",
            D: "beach"
        },

        // 17
        {
            A: "beach",
            B: "beach",
            C: "beach",
            D: "beach"
        },

        // 18
        {
            A: "beach",
            B: "beach",
            C: "beach",
            D: "beach"
        },

        // 19
        {
            A: "beach",
            B: "beach",
            C: "beach",
            D: "beach"
        },

        // 20
        {
            A: "beach",
            B: "beach_grass",
            C: "grass_beach",
            D: "beach"
        },

        // 21
        {
            A: "beach",
            B: "beach",
            C: "beach_grass",
            D: "beach_grass"
        },

        // 22
        {
            A: "beach_grass",
            B: "beach",
            C: "beach",
            D: "grass_beach"
        },

        // 23
        {
            A: "grass_beach",
            B: "grass_beach",
            C: "beach",
            D: "beach"
        },

        // 24
        {
            A: "grass_beach",
            B: "grass",
            C: "grass_beach",
            D: "beach"
        },

        // 25
        {
            A: "beach",
            B: "beach_grass",
            C: "grass",
            D: "beach_grass"
        },

        // 26
        {
            A: "beach_grass",
            B: "beach",
            C: "beach_grass",
            D: "grass"
        },

        // 27
        {
            A: "grass",
            B: "grass_beach",
            C: "beach",
            D: "grass_beach"
        },

        // 28
        {
            A: "grass_beach",
            B: "grass",
            C: "grass",
            D: "beach_grass"
        },

        // 29
        {
            A: "beach_grass",
            B: "beach_grass",
            C: "grass",
            D: "grass"
        },

        // 30
        {
            A: "grass",
            B: "grass_beach",
            C: "beach_grass",
            D: "grass"
        },

        // 31
        {
            A: "grass",
            B: "grass",
            C: "grass_beach",
            D: "grass_beach"
        },

        // 32
        {
            A: "grass",
            B: "grass",
            C: "grass",
            D: "grass"
        },

        // 33
        {
            A: "grass",
            B: "grass",
            C: "grass",
            D: "grass"
        },

        // 34
        {
            A: "grass",
            B: "grass",
            C: "grass",
            D: "grass"
        },

        // 35
        {
            A: "grass",
            B: "grass",
            C: "grass",
            D: "grass"
        },

        // 36
        {
            A: "water_grass",
            B: "water",
            C: "water",
            D: "grass_water"
        },

        // 37
        {
            A: "grass_water",
            B: "grass_water",
            C: "water",
            D: "water"
        },

        // 38
        {
            A: "water",
            B: "water_grass",
            C: "grass_water",
            D: "water"
        },

        // 39
        {
            A: "water",
            B: "water",
            C: "water_grass",
            D: "water_grass"
        },

        // 40
        {
            A: "water_grass",
            B: "water",
            C: "water_grass",
            D: "grass"
        },

        // 41
        {
            A: "grass",
            B: "grass_water",
            C: "water",
            D: "grass_water"
        },

        // 42
        {
            A: "grass_water",
            B: "grass",
            C: "grass_water",
            D: "water"
        },

        // 43
        {
            A: "water",
            B: "water_grass",
            C: "grass",
            D: "water_grass"
        },

        // 44
        {
            A: "grass",
            B: "grass_water",
            C: "water_grass",
            D: "grass"
        },

        // 45
        {
            A: "grass",
            B: "grass",
            C: "grass_water",
            D: "grass_water"
        },

        // 46
        {
            A: "grass_water",
            B: "grass",
            C: "grass",
            D: "water_grass"
        },

        // 47
        {
            A: "water_grass",
            B: "water_grass",
            C: "grass",
            D: "grass"
        },

        // 48
        {
            A: "grass",
            B: "grass_water",
            C: "water_beach",
            D: "grass_beach"
        },

        // 49
        {
            A: "water_beach",
            B: "water_grass",
            C: "grass",
            D: "beach_grass"
        },

        // 50
        {
            A: "grass_beach",
            B: "grass",
            C: "grass_water",
            D: "beach_water"
        },

        // 51
        {
            A: "grass_water",
            B: "grass",
            C: "grass_beach",
            D: "water_beach"
        },

        // 52
        {
            A: "beach_water",
            B: "beach_grass",
            C: "grass",
            D: "water_grassr"
        },

        // 53
        {
            A: "grass",
            B: "grass_beach",
            C: "beach_water",
            D: "grass_water"
        },

        // 54
        {
            A: "water_grass",
            B: "water_beach",
            C: "beach_grass",
            D: "grass"
        },

        // 55
        {
            A: "beach_grass",
            B: "beach_water",
            C: "water_grass",
            D: "grass"
        },

        // 56
        {
            A: "grass_beach",
            B: "grass_water",
            C: "water_beach",
            D: "beach"
        },
        
        // 57
        {
            A: "water_beach",
            B: "water_grass",
            C: "grass_beach",
            D: "beach"
        },

        // 58
        {
            A: "beach",
            B: "beach_grass",
            C: "grass_water",
            D: "beach_water"
        },

        // 59
        {
            A: "grass_water",
            B: "grass_beach",
            C: "beach",
            D: "water_beach"
        },

        // 60
        {
            A: "beach_water",
            B: "beach",
            C: "beach_grass",
            D: "water_grass"
        },

        // 61
        {
            A: "beach_grass",
            B: "beach",
            C: "beach_water",
            D: "grass_water"
        },

        // 62
        {
            A: "water_grass",
            B: "water_beach",
            C: "beach",
            D: "grass_beach"
        },

        // 63
        {
            A: "beach",
            B: "beach_water",
            C: "water_grass",
            D: "beach_grass"
        },

        // 64
        {
            A: "grass_beach",
            B: "grass_water",
            C: "water",
            D: "beach_water"
        },

        // 65
        {
            A: "water",
            B: "water_grass",
            C: "grass_beach",
            D: "water_beach"
        },

        // 66
        {
            A: "beach_water",
            B: "beach_grass",
            C: "grass_water",
            D: "water"
        },

        // 67
        {
            A: "grass_water",
            B: "grass_beach",
            C: "beach_water",
            D: "water"
        },

        // 68
        {
            A: "water",
            B: "beach_grass",
            C: "grass_beach",
            D: "water_grass"
        },

        // 69
        {
            A: "beach_grass",
            B: "beach_water",
            C: "water",
            D: "grass_water"
        },

        // 70
        {
            A: "water_grass",
            B: "water",
            C: "water_beach",
            D: "grass_beach"
        },

        // 71
        {
            A: "water_beach",
            B: "water",
            C: "water_grass",
            D: "beach_grass"
        }
    ]
);