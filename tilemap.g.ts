// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000202020202020202020202020000000002020000000202020202020200000000020000000000000000000000000000000100010101000101010101010100000001000101010101000000000001000000010001010101010001010100010000000100000001010100010201000100000001010100010101000102010001000000020201000101010001020100010000000202010000000000010201000100000002020101010101010102010001000000020202020202020202020100010000000202010101010101010101000100000000000000000000000000000001000000000202010101010101010101010000000000000000000000000000000000`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 . . . 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . 2 2 2 . 2 2 2 2 2 2 2 . 
. . 2 . 2 2 2 2 2 . . . . . 2 . 
. . 2 . 2 2 2 2 2 2 2 2 2 . 2 . 
. . 2 . . . 2 2 2 2 2 2 2 . 2 . 
. . 2 2 2 . 2 2 2 . 2 2 2 . 2 . 
. . 2 2 2 . 2 2 2 . 2 2 2 . 2 . 
. . 2 2 2 . . . 2 2 2 2 2 . 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . 2 . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath4,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
