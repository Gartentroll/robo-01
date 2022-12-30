input.onSound(DetectedSound.Quiet, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (Rover.Ultrasonic() >= 100) {
        Rover.MotorStopAll(MotorActions.Stop)
        basic.pause(100)
        Rover.MotorRunDual(-75, 75)
        basic.pause(100)
        Rover.MotorStopAll(MotorActions.Stop)
    } else {
        Rover.Move(100)
    }
})
/**
 * B
 */
// A+B
input.onButtonPressed(Button.B, function () {
    if (randint(0, 10) == randint(0, 10)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    if (true) {
        Rover.MotorStopAll(MotorActions.Stop)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 4798, 4785, 159, 255, 773, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
        basic.showString("Unfall")
        Rover.setALLRGB(Rover.showColor(0xff0000))
        music.stopAllSounds()
    } else {
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.showColor(0xff0000))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.showColor(0x00ff00))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.showColor(0x007fff))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.showColor(0xff0080))
    }
})
basic.showString("Hello!")
basic.forever(function () {
	
})
