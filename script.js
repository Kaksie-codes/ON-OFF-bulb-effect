const btnEl = document.querySelector('.btn');
const bodyEl  = document.querySelector('body');
const audioEl = document.querySelector('#audio')
btnEl.addEventListener('click', () => {
    bodyEl.classList.toggle('on');
    audioEl.play()
})