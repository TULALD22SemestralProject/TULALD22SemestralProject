#!/bin/bash

BASE_DIR="$(dirname $0)"

python3 $BASE_DIR/../util/extract_tiles.py $BASE_DIR/terrain_tiles24.png 32