const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');
const blue = document.querySelector('.blue');

let load = 0;

const incrementBlur = setInterval(blurring,30);

function blurring() {
  load++;

  if(load > 99) {
    clearInterval(incrementBlur);
  }
  
  loadingText.textContent = `${load}%`;
  blue.style.width = `${scale(load, 0, 100, 0, 300)}px`;
}

const scale = function (num, inMin, inMax, outMin, outMax){
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}