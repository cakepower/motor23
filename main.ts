input.onButtonPressed(Button.A, function () {
    motorbit.forward(50)
})
input.onButtonPressed(Button.AB, function () {
    motorbit.brake()
})
input.onButtonPressed(Button.B, function () {
    motorbit.back(100)
})
