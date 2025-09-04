browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    animation.runImageAnimation(
    DoodleDude,
    [img`
        ................
        ................
        ....ffff........
        ....f...f.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        ......f.........
        .....fff........
        ....ffffff......
        ....f.f..ff.....
        ...f..f...ff....
        ..ff.f.ff.......
        .....f..fff.....
        ....ff...ff.....
        ....f.....f.....
        ...ff.....f.....
        ...f......f.....
        `,img`
        ................
        ................
        ................
        ....ffff........
        ....f..ff.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        ....ffff........
        ...ff.fff.......
        ..ff..f.fff.....
        ..f...f...f.....
        ......fff.f.....
        ......f.f.f.....
        .....ff.f.......
        .....f..f.......
        .....f.ff.......
        .....f.f........
        `],
    100,
    true
    )
})
browserEvents.Backspace.onEvent(browserEvents.KeyEvent.Pressed, function () {
    browserEvents.Backspace.pauseUntil(browserEvents.KeyEvent.Pressed)
})
info.onCountdownEnd(function () {
    for (let index = 0; index < 20; index++) {
        Zombie = sprites.create(img`
            .....ffffb3.....
            ....f7777bdd....
            ....fff777dd....
            ....f77777f.....
            ....f22777f.....
            .....22777f.....
            fffffbbbbff1dddd
            5777bbbbbbddd111
            5555bbbbbb1111d.
            f77777bbbbddddd.
            f5555bbbbb11111.
            fffffbbbbbdd111.
            .....bbbbbbddd..
            .....b8bb8b11...
            .....888888.....
            ......f577f.....
            ......f577f.....
            ......f577f.....
            ......f555f.....
            ......fffff.....
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Zombie,
        assets.animation`zombie`,
        50,
        true
        )
        Zombie.follow(DoodleDude)
        tiles.placeOnRandomTile(Zombie, assets.tile`myTile14`)
    }
    game.showLongText("THEY HAVE WINGS?!?! (Build around yourself)", DialogLayout.Bottom)
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Turret, 50, 0)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 9 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 9 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . . 1 9 9 1 1 . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 9 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . 1 1 9 9 9 1 . . . . . . 
        . . . . . 1 1 9 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . 1 9 9 9 9 . 1 . . . . . 
        . . . . 1 1 9 9 9 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        `,img`
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 9 . . . . . . . . 
        . . . . . . 7 9 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 9 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . 1 . 9 9 9 1 1 . . . . . 
        . . . . 1 1 1 9 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . 1 1 9 . 1 1 . . . . . 
        . . . . . 9 1 1 1 1 . . . . . . 
        . . . . . . 9 1 9 9 . . . . . . 
        `],
    30,
    true
    )
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    animation.runImageAnimation(
    DoodleDude,
    [img`
        ................
        ................
        ....ffff........
        ....f...f.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        ......f.........
        .....fff........
        ....ffffff......
        ....f.f..ff.....
        ...f..f...ff....
        ..ff.f.ff.......
        .....f..fff.....
        ....ff...ff.....
        ....f.....f.....
        ...ff.....f.....
        ...f......f.....
        `,img`
        ................
        ................
        ................
        ....ffff........
        ....f..ff.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        ....ffff........
        ...ff.fff.......
        ..ff..f.fff.....
        ..f...f...f.....
        ......fff.f.....
        ......f.f.f.....
        .....ff.f.......
        .....f..f.......
        .....f.ff.......
        .....f.f........
        `],
    100,
    true
    )
})
browserEvents.MouseWheel.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    if (Items == 1) {
        Turret_Line = sprites.create(img`
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
            `, SpriteKind.Player)
        Turret_Line.setPosition(78, 31)
        Items += 1
    } else {
        game.showLongText("Get a line please", DialogLayout.Bottom)
    }
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    DoodleDude.setVelocity(0, -80)
    pause(200)
    DoodleDude.setVelocity(0, 80)
    game.setDialogTextColor(7)
})
browserEvents.T.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Items == 2) {
        Turret = sprites.create(img`
            f b f . . . f b b f . . . f b f 
            f f f f f f f f f f f f f f f f 
            b d 9 d 9 d d f c d d 9 d 9 d b 
            b d 9 9 9 d d c f d d 9 9 9 d b 
            b d d d 9 d d f c d d 9 d d d b 
            b d d d 9 d d c f d d 9 d d d b 
            b b d d 9 d d f c d d 9 d d b b 
            . b b d 9 9 9 c f 9 9 9 d b b . 
            . . b b b d d f c d d b b b . . 
            . . . . b b b f f b b b . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(Turret, 100, 0)
    } else {
        game.showLongText("Set up the Line first! (mouse wheel press)", DialogLayout.Bottom)
    }
})
browserEvents.Enter.onEvent(browserEvents.KeyEvent.Released, function () {
    Play_Button.setImage(img`
        99999999999999999999999999999999999999999999999999
        96666666666666666666666666666666666666666666666668
        96666666666666666666666666666666666666666666666668
        96666666666666666666666666666666666666666666666668
        9666666ffffff66666f666666fffff66f666f6666666666668
        9666666f6666f66666f666666f666f66f666f6666666666668
        9666666f6666f66666f666666f666f666f6f66666666666668
        9666666f6666f66666f666666fffff6666f666666666666668
        9666666ffffff66666f666666f666f6666f666666666666668
        9666666f6666666666f666666f666f6666f666666666666668
        9666666f6666666666f666666f666f6666f666666666666668
        9666666f6666666666f666666f666f6666f666666666666668
        9666666f6666666666f666666f666f6666f666666666666668
        9666666f6666666666fffff66f666f66666666666666666668
        96666666666666666666666666666666666666666666666668
        98888888888888888888888888888888888888888888888888
        `)
    color.FadeToBlack.startScreenEffect()
    pause(2000)
    sprites.destroy(Play_Button)
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff7777777ffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777777777ffffffffffff777fffffffffffffffffffff777777777777777777777ffffffffffff777777777777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777f777777fffffffffff777fffffffffffffffffffff777777777777777777777ffffffffffff777777777777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ff77777fffffffffff777fffffffffffffffffffff777777777777777777777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777ffffffffffffffffffffffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777fffff777777777777777ffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777fffff777777777777777ffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffffffffffffffff
        ffffffffffffffffffff777fffff777777777777777ffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777fffff7777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777fffff7777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777fffff7777777777777ffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff777fffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ffff7777ffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff777ffffffffffffffff777fffffffffff777ff777777ffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff77777777777ffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff777777777ffffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffff7777777777777777777777fffffffffff7777777ffffffffffffff777fffffffffffffffffffff777fffffffffffffff777ffffffffffff777ffffffffffffff777fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff77777ffffffffffffffff7777777777777777777fffff777777777777777777777ffffffffffff777ffffffffffffff777fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777fffff777777777777777777777ffffffffffff77777777777777777777fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777fffff777777777777777777777ffffffffffff77777777777777777777fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ff111111111ff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f1111111111111f111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111111111111111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f177777777777771f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11711111111111711f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f171111111111171f11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f177777777777771f11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f1111111111111f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ff111111111ff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(5000)
    color.startFadeFromCurrent(color.originalPalette)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    pause(2000)
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level1`)
    pause(100)
    color.startFadeFromCurrent(color.originalPalette)
    DoodleDude = sprites.create(img`
        ................
        ................
        ................
        ....ffff........
        ....f..ff.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        .....ffff.......
        .....ff.ff......
        ....fff..f......
        ....f.f..ff.....
        ....ff.ff.f.....
        .....f..fff.....
        ....ff...ff.....
        ....f.....f.....
        ...ff.....f.....
        ...f......f.....
        `, SpriteKind.Player)
    DoodleDude.setVelocity(0, 80)
    info.setLife(3)
    scene.cameraFollowSprite(DoodleDude)
    controller.moveSprite(DoodleDude, 100, 0)
    scene.cameraShake(8, 5000)
    pause(5000)
    game.setDialogFrame(img`
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        9 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.showLongText("Oh no!", DialogLayout.Bottom)
    game.showLongText("It looks like a stampede of zombies is approaching!", DialogLayout.Bottom)
    game.showLongText("I think you will have to build a tower...", DialogLayout.Bottom)
    pause(1000)
    game.showLongText("(Right click to place, no second chance!)", DialogLayout.Bottom)
    Items = 0
    info.startCountdown(120)
    line = sprites.create(img`
        . . . . . . . . . . . . . . . b 
        . . . . . . . . . . . . . . b . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . c . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(line, assets.tile`myTile10`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Items += 1
})
browserEvents.Enter.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Play_Button.setImage(img`
        88888888888888888888888888888888888888888888888888
        86666666666666666666666666666666666666666666666669
        86666666666666666666666666666666666666666666666669
        86666666666666666666666666666666666666666666666669
        8666666ffffff66666f666666fffff66f666f6666666666669
        8666666f6666f66666f666666f666f66f666f6666666666669
        8666666f6666f66666f666666f666f666f6f66666666666669
        8666666f6666f66666f666666fffff6666f666666666666669
        8666666ffffff66666f666666f666f6666f666666666666669
        8666666f6666666666f666666f666f6666f666666666666669
        8666666f6666666666f666666f666f6666f666666666666669
        8666666f6666666666f666666f666f6666f666666666666669
        8666666f6666666666f666666f666f6666f666666666666669
        8666666f6666666666fffff66f666f66666666666666666669
        86666666666666666666666666666666666666666666666669
        89999999999999999999999999999999999999999999999999
        `)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "You Died!")
    game.gameOver(false)
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    let Day = 0
    if (Day == 0) {
        tiles.setTileAt(tiles.locationOfSprite(DoodleDude), assets.tile`myTile1`)
    } else {
    	
    }
})
browserEvents.T.onEvent(browserEvents.KeyEvent.Repeat, function () {
    sprites.destroy(Turret)
    DoodleDude = sprites.create(img`
        ................
        ................
        ................
        ....ffff........
        ....f..ff.......
        ....f...f.......
        ....fffff.......
        ......f.........
        ......f.........
        ......f.........
        .....ffff.......
        .....ff.ff......
        ....fff..f......
        ....f.f..ff.....
        ....ff.ff.f.....
        .....f..fff.....
        ....ff...ff.....
        ....f.....f.....
        ...ff.....f.....
        ...f......f.....
        `, SpriteKind.Player)
    controller.moveSprite(DoodleDude)
})
browserEvents.D.onEvent(browserEvents.KeyEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, DoodleDude)
})
browserEvents.MouseRight.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    tiles.setTileAt(tiles.locationOfSprite(DoodleDude), assets.tile`myTile9`)
    tileUtil.setWalls(assets.tile`myTile9`, true)
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, DoodleDude)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    color.startFade(color.originalPalette, color.Poke, 100)
    color.startFadeFromCurrent(color.originalPalette, 0)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
})
let line: Sprite = null
let Turret_Line: Sprite = null
let Items = 0
let Turret: Sprite = null
let projectile: Sprite = null
let Zombie: Sprite = null
let DoodleDude: Sprite = null
let Play_Button: Sprite = null
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888ffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888ffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888fffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888fff8888888888888888888fff88ffffff8888888888888888fff888888888888888888888888888888888888888888888fffff888888888888888888888888888888888
    8888888888888888888888888fff888888888888888888ffff8fffffffff88888888888888fff88888ffff888888888888888888888888888888888888ffffff88888888888888888888888888888888
    8888888888888888888888888fff88888888888888888ffffffffffffffff8888888888888ffff8888ffff888888888888888888888888888888888888ffffff88888888888888888888888888888888
    8888888888888888888888888fff8888888888888888fffff8fffff8ffffff888888888888ffff8888ffff888888fff888888888888888888888888888fffffff8888888888888888888888888888888
    8888888888888888888888888fff8888888888888888ffff8ffff88888ffffff88888888888fff8888ffff888888fff888888888888888888888888888fffffff8888888888888888888888888888888
    8888888888888888888888888fff8888888888888888fffffffff888888fffff88888888888fff888ffffff8888ffff88888888888888ffffffff88888fff8fff8888888888888888888888888888888
    8888888888888888888888888fff8888888888888888ffffffff88888888fffff8888888888fff888ffffff8888ffff8888888888ffffffffffff88888fff8ffff888888888888888888888888888888
    8888888888888888888888888fff888888888888888ffffffff8888888888fffff888888888fff888ffffff888ffff88888888888ffffffffffff8888ffff8ffff888888888888888888888888888888
    8888888888888888888888888fff888888888888888ffffffff88888888888ffff888888888fff888ffffff888ffff88888888888ffffff8888888888ffff88fff888888888888888888888888888888
    8888888888888888888888888fff888888888888888fff8fff8888888888888ffff88888888fff88fffffff888fff888888888888fff8888888888888fff888fff888888888888888888888888888888
    8888888888888888888888888fff888888888888888fff88888888888888888ffff88888888ffff8fffffff88ffff888888888888fff8888888888888fff888fff888888888888888888888888888888
    8888888888888888888888888fff888888888888888fff888888888888888888fff88888888ffff8fff8ffff8ffff88888888888fffff888888888888fffffffff888888888888888888888888888888
    8888888855555888888888888fff888888888888888ffff8888888888888888ffff888888888fff8fff8ffff8fff888888888888ffffffffffffffff8fffffffff888888888888888888888888888888
    8888888885555888888888888fff888888888888888ffff8888888888888888ffff888888888fff8fff88fff8fff888888888888ffffffffffffffff8fffffffff888888888888888888888888888888
    8888888885555588888888888fff8888888888888888fff8888888888888888ffff888888888fffffff88fff8fff8888888888888fffffffffffffff8fff8fffff888888888888888888888888888888
    8888888888555558858888888fff8888888888888888ffff888888888888888fff8888888888fffffff88fff8fff8888888888888fff888888888888ffff8ffff8888888888888888888888888888888
    8888888888555555558888888fff8888888888888888fffff8888888888888ffff8888888888ffffff888fffffff8888888888888fff888888888888ffff88fff8888888888888888888888888888888
    8888888888555555588888888fff88888888888888888fffff88888888888fffff8888888888ffffff888fffffff8888888888888fff888888888888fff888ffff888888888888888888888888888888
    8888888888555555555888888fff888888888888888888fffff888888888fffff888888888888fffff8888fffff88888888888888fff88888888888ffff888fffff88888888888888888888888888888
    8888888888555555555888888fff8888888888888888888fffff88888888fffff888888888888fffff88888ffff88888888888888ffffffffff8888ffff8888ffff88888888888888888888888888888
    8888888888855555558888888fff8888888888888888888ffffffff888fffff88888888888888ffff888888ffff88888888888888ffffffffff8888fff888888fff88888888888888888888888888888
    8888888888855555558888888fff888888888888888888888ffffffffffffff888888888888888fff888888ffff888888888888888fffffffff8888fff888888ffff8888888888888888888888888888
    8888888888855555558888888fff8888888888888888888888ffffffffffff8888888888888888fff8888888888888888888888888888888888888ffff888888fffff888888888888888888888888888
    8888888888855555558888888fff8888888888888888888888888fffffff8888888888888888888888888888888888888888888888888888888888ffff8888888ffff888888888888888888888888888
    8888888888555555558888888fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff888888888ffff88888888888888888888888888
    8888888888555555588888888fff888888888888cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888fff888888888ffff88888888888888888888888888
    8888888885555558888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888ffff8888888888888888888888888
    888888888555558888888888888888888888888ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888ffff8888888888888888888888888
    888888885558888888888888888888888888888ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888ffff8888888888888888888888888
    888888858888888888888888888888888888888ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888888888888888888fff8888888888888888888888888
    888888888888888888888888888888888888888ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbfbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbfbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbfbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbfbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbfbbbffbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbfffffbbfffbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbfbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbfbbbbffbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbfbbbbfbfbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbffbbffbfbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbffffbbfbbbbbbfbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbfbbbbbbfbbbfbbfbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbfbbbbbbfbbbfbbffbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbffbbbbffbbfbbbbfbbbffbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbffffffbbbfbbbbfbbbfbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbfbbfbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888ccccccccccccccbbbbbbbbbbbbbffbbbbbffbfbbbbbbffffffbbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888ccccccccccccccbbbbbbbbbbbbbfbbffffbbbfbbbbbfbbbbbbfbbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888ccccccccccccccbbbbbbbbbbbbbfffbbbbbbfbbbbbffbbbbbbbfbbbbbbbbb88888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbfbbbbbbbffffb888f88888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbfffbbbbbbbbbbbbbbbfbbbbbbffbbbffff8888555.8888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbfbfbbbbbbbbbbbbbffffbbbbbfbbbbb888888885858888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbfbffbbbbbbbbbbbbbbbbbbbbbfbbbbb888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbfbbfbbbfffbbbbbbbbbbbbbbbfbbbbb888888885888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbfbbfbbbfbfbbbbbbbbffffbbbbfbbbb888888858888888888888888888888888888888888888888888888888888888888888888
    888888888888888888f88888888888888888888888888888888cccbbfffbfbbbffffbbbbbbffbbfffbbfbbbb888888858888888888888888888888888888888888888888888888888888888888888888
    888888888888888888f88888888888888888888888888888888cccbbfbfffbbbffffbbbbbfbbbbbbffbbfffb888888858888888888888888888888888888888888888888888888888888888888888888
    8888888888888888ff88888888888888888888ff88888888888cccbbfbbbbbbbffffbbbbfffbbbbbbfbbfbbb888888855555588888888888888888888888888888888888888888888888888888888888
    8888888888888888f88fffff8fffff8f8888888ff8888888888cccbbbbbbbbbbfbfbbbbbfbbffffbbfbfbbbb888888888888588888888888888888888888888888888888888888888888888888888888
    888888888888888f8ff8888ffff888ff88f888fff8888888ff8fffbbbbbbbbbbfbfbbbbbfbbbbbbfffbfbbbb88888ff88855888888888888888888888888888888888888888888888888888888888888
    888888888888888fff8888fffff88fffff888ff8ff88888ff88ccffbbbbbbbbbfbffbbbbfbbbbbbbbbfbbbbb8888f8888855558888888888888888888888888888888888888888888888888888888888
    88888888888888f88f888ff8f8ffff88f8888f888888888f888cccfbbbbbbbbbbbbbbbbbfbbbbbbbbbfbbbbb888ff8888888858888888888888888888888888888888888888888888888888888888888
    88888888888888888f888f8ff888888ff88888888888888f888cccfbbbbbbbbbbbbbbbbbfffbbbbbbbbffbbb888f88888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888f88f8f8888888f888888888888888f888ccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbb888ff8888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888fffff8888f88888888888888888ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffb88888f88888888888888ff8888888888888ff88888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff888888ff88888888888f88f888888888888ff88888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff888888ff8888888888f8888f8888888888f8f88888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbb88888ff88888888888f88888f88888888f88f888888f8888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888f8f8888ff88888ff888f88888ffff88888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888f88ff888887888f88888f8888f8888ffff8888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888858788ff88ff8888878f888888f88ff88888f88f888fff8888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888.888888fffff87788f888888f88f8888888f8888ff88f8888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888fff577f8888888f8f88888888f888ff888f8888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888788888888888f88f88888888ff888888888f888f888ff88fff88888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888887788888888888888f88888888f8888888888f88f8fff8888f8ff8888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888885887888888888888888888777888f888888888f888f8888888f888f8888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888885888888888888888888888777888888888888f8888f888888f888ff8888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888858888788888888888888888777888888888888f8888f888888f888f88888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888885888888888778888888888877888888888888888888f88888ff888f88888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888585888888888888888888888787..888888888888888fff888fffff888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888855888888888888888788888888888888888888888888888888f8f88888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888888888888887878888885888888888888888888f88f8888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888885777887888858888888888888888888888f888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888857777888888885888888888888888888888f888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888558888888557778788888885888888888888888888888ff88888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888885588888855777788888.88858888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888885888888557777887888888858888888888888888888888888888888888
    888888888888fffff8888888888888888888888888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888885888888557778878588888858888888888888888888888888888888888
    88888888fff8ffffff88888888fffffffffffffffffff888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888fff.58855888885557778755888888858888888888888888888888888888888888
    88888888fff8fffffff8888888fffffffffffffffffff88888fffffffffffffffffffbbbbbbbbbbbbbbbbbbb8fff88ffffffffff88885757788888888888588888888888888888888888888888888888
    88888888fff888ffffff888888fffffffffffffffffff8888ffffffffffffffffffffbbbbbbbbbbbbbbbbbbb8fff88fffffffffff8857778888888855885888888888888888888888888888888888888
    88888888fff88888fffff88888fff88888888888888888888ffffffffffffffffffffbfffffffffffbffffbb8fff888fffffffffff55...8888888855858888888888888888888888888888888888888
    88888888fff888888fffff8888ffff8888888888888888888ffffcbbbbbbbbbbbbbbbfffffffffffffffffbb8fff888fff8885fffff..558888888858858888888888888888888888888888888888888
    8888888ffff8888888ffff8888ffff8888888888888888888fffccbbbbbbbbbbbbbbffffffffffffffffffbb8fff888fff8885.ffff.5888885555588588888888888888888888888888888888888888
    8888888ffff88888888fff88888fff8888888888888888888ffffffffffbbbbbbbbfffffbbbbbffffffffffb8fff888fff8885.ffff58888888888585888888888888888888888888888888888888888
    8888888fff888888888fff88888fff8888888888888888888fffffffffffbbbbbbbffffffffffffffffffffb8fff88ffff888558fff58888888888858888888888888888888888888888888888888888
    8888888fff888888888fff88888fffffffffffff888888888fffffffffffbbbbbbbfffffffffffffffffffff8fff88ffff888888fff88888888888888888888888888888888888888888888888888888
    8888888fff888888888fff88888fffffffffffff888888888fffccbbffffbbbbbbbfffffffffffffbfffffffffff88fff8888888fff88888888888888888888888888888888888888888888888888888
    8888888fff888888888fff88888fffffffffffff888888888fffccbbbbbbbbbbbbbffffffffbbbbbbfffbfffffff88fff8888888fff88888888888888888888888888888888888888888888888888888
    8888888fff888888888fff8888ffff8888888888888888888fffccbbbbbbbbbbbbbffffbbbbbbbbbbfffbfffffff88fff8888888fff88888888888888888888888888888888888888888888888888888
    8888888fff888888888fff8888ffff8888888888888888888fffccbbbbbbbbbbbbbfffffbbbbbbbbbfffbbbfffff88fff88888fffff88888888888888888888888888888888888888888888888888888
    8888888fff88888888ffff8888fff88888888888888888888fffccbbbbbbbbbbbbbfffffffffffbbffffbbbfffff88fff8888ffffff88888888888888888888888888888888888888888888888888888
    8888888fff8888888fffff8888ffff8888ffff88888888888fffccbbbbbbbbbbbbbbffffffffffbbffffbbbbfff888ffff88ffffff888888888888888888888888888888888888888888888888888888
    8888888ffff888fffffff88888ffffffffffff88888888888fffccbbbbbbbbbbbbbbbbffffffffbbfffbbbbb888888ffff88fffff8888888888888888888888888888888888888888888888888888888
    8888888ffffffffffffff88888ffffffffffff88888888888fffccbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbb8888888ffff8ffff88888888888888888888888888888888888888888888888888888888
    8888888fffffffffffff8888887fffffffffff8888888888888cccbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbb8888888ffff8888888888888888888888888888888888888888888888888888888888888
    `)
Play_Button = sprites.create(img`
    99999999999999999999999999999999999999999999999999
    96666666666666666666666666666666666666666666666668
    96666666666666666666666666666666666666666666666668
    96666666666666666666666666666666666666666666666668
    9666666ffffff66666f666666fffff66f666f6666666666668
    9666666f6666f66666f666666f666f66f666f6666666666668
    9666666f6666f66666f666666f666f666f6f66666666666668
    9666666f6666f66666f666666fffff6666f666666666666668
    9666666ffffff66666f666666f666f6666f666666666666668
    9666666f6666666666f666666f666f6666f666666666666668
    9666666f6666666666f666666f666f6666f666666666666668
    9666666f6666666666f666666f666f6666f666666666666668
    9666666f6666666666f666666f666f6666f666666666666668
    9666666f6666666666fffff66f666f66666666666666666668
    96666666666666666666666666666666666666666666666668
    98888888888888888888888888888888888888888888888888
    `, SpriteKind.Player)
Play_Button.setPosition(75, 90)
forever(function () {
    tileUtil.setWalls(assets.tile`myTile0`, false)
    tileUtil.setWalls(assets.tile`myTile1`, false)
    tileUtil.setWalls(assets.tile`myTile2`, false)
    tileUtil.setWalls(assets.tile`myTile3`, false)
    tileUtil.setWalls(assets.tile`myTile4`, false)
    tileUtil.setWalls(assets.tile`myTile5`, false)
    tileUtil.setWalls(assets.tile`myTile7`, false)
    tileUtil.setWalls(assets.tile`myTile8`, false)
})
