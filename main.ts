input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})
servos.P0.setRange(0, 180)
basic.forever(function () {
	
})
