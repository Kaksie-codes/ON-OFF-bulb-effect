const btnEl = document.querySelector('.btn');
const bodyEl  = document.querySelector('body');
const audioEl = document.querySelector('#audio');
const detailEl = document.querySelector('.details')

detailEl.textContent = 'OFF'
btnEl.addEventListener('click', () => {
    bodyEl.classList.toggle('on');
    audioEl.play();
    console.log(bodyEl.classList.contains('on'))
})

document.addEventListener('click', () => {
    if(bodyEl.classList.contains('on')){
        detailEl.textContent = 'ON';
    }else{
        detailEl.textContent = 'OFF';
    }
})
