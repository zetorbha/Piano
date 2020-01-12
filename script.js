const black_keys = ['s', 'd', 'g', 'h', 'j']
const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const whitekeys = document.querySelectorAll('.keys.white')
const blackkeys = document.querySelectorAll('.keys.black')
const keys = document.querySelectorAll('.keys')

keys.forEach(keys => {

    keys.addEventListener('click', () => playnote(keys))
})

document.addEventListener('keydown', e => {

    if (e.repeat) return
    const key = e.key
    // console.log(key)
    const whitekeyIndex = white_keys.indexOf(key)
    // console.log(whitekeyIndex)
    const blackkeyIndex = black_keys.indexOf(key)
    // console.log(blackkeyIndex)
    if (whitekeyIndex > -1) playnote(whitekeys[whitekeyIndex])
    if (blackkeyIndex > -1) playnote(blackkeys[blackkeyIndex])
})

function playnote(keys) {
    const noteAudio = document.getElementById(keys.dataset.note);
    noteAudio.currentTime = 0;
    keys.classList.add('active')
    noteAudio.play()
    noteAudio.addEventListener('ended', () => keys.classList.remove('active'))
}