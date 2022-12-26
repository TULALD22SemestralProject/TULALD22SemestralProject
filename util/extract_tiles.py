#!/usr/bin/python3

import os, math, argparse
import numpy
from PIL import Image

def extract_tiles(img_path, tile_sz, save_dir_path=None):
    if save_dir_path is None:
        save_dir_path = os.path.dirname(img_path)

    img = Image.open(img_path)
    ndigits = math.floor(math.log10(img.width*img.height/tile_sz))
    x = 0
    y = 0
    i = 0
    pixels = numpy.array(img)
    while y + tile_sz <= img.height:
        while x + tile_sz <= img.width:
            Image.fromarray(pixels[y:y+tile_sz, x:x+tile_sz, :]).save(os.path.join(save_dir_path, str(i).zfill(ndigits) + ".png"))
            x += tile_sz
            i += 1
        
        x = 0
        y += tile_sz

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("img_path", help="The image path")
    parser.add_argument("tile_size", help="The size of one tile", type=int)
    parser.add_argument("save_dir", help="The save directory for the extracted tiles. Default is the directory of the source image.", nargs='?')

    args = parser.parse_args()

    extract_tiles(args.img_path, args.tile_size, args.save_dir)