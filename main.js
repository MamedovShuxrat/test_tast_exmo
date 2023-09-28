const dunnoInput = document.querySelector('.dunno_input')
const userInput = document.querySelector('.dunno_user-input')
const changingBox = document.querySelector('.dunno_user')
const micBox = document.querySelector('.dunno_mic')
const micImg = document.querySelector('.dunno_mic-img')
const wave = document.querySelector('.wave')
const firstWave = document.querySelector('.first-wave')
const secondWave = document.querySelector('.second-wave')

let isMicPressed = false
let step = 0.5

micBox.addEventListener('mousedown', function () {
    isMicPressed = true
    changer('none', 'block', 'white', 'red', 'Незнайка, а почему все переверну...')
    animate()
})


function changer(userInputStyle, waveStyle, micSrc, micBoxColor, dunnoVal) {
    userInput.style.display = userInputStyle
    wave.style.display = waveStyle
    micImg.src = `images/${micSrc}.svg`
    micBox.style.backgroundColor = micBoxColor
    dunnoInput.value = dunnoVal
}

micBox.addEventListener('mouseup', function () {
    if (isMicPressed) {
        isMicPressed = false
        changer('none', 'none', 'check', 'green', 'Это, наверно, не Луна перевернулась, а мы сами перевернулись.')
    }

})

micBox.addEventListener('mouseout', function () {
    if (isMicPressed) {
        isMicPressed = false
        changer('none', 'none', 'check', 'green', 'Это, наверно, не Луна перевернулась, а мы сами перевернулись.')
    }
})


function animate() {
    firstWave.style.transform = `translateX(${step}px)`
    secondWave.style.transform = `translateX(-${step}px)`
    if (step <= 5) {
        step += 0.3
    } else {
        step = 0
    }

    if (isMicPressed) {
        requestAnimationFrame(animate)
    }
}