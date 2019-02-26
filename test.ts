// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    led.plot(0, 0)
    ir2.on()
    basic.pause(100)
    led.unplot(0, 0)
    ir2.off()
    basic.pause(100)
})
