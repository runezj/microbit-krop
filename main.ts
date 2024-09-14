input.onGesture(Gesture.Shake, function () {
    radio.sendString("Ja")
})
function Hjerteslag () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(300)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Ja")
})
function Ændrøjne () {
    XRotation = Math.abs(input.rotation(Rotation.Pitch))
    TilfældigtTal = randint(0, 19)
    if (TilfældigtTal < 1) {
        radio.sendString("Blink")
    }
    if (XRotation > 50 && XRotation < 130) {
        radio.sendString("Vågn")
    } else {
        radio.sendString("Sov")
    }
    basic.pause(100)
}
let TilfældigtTal = 0
let XRotation = 0
radio.setGroup(292)
radio.setTransmitPower(7)
basic.forever(function () {
    Ændrøjne()
    Hjerteslag()
})
