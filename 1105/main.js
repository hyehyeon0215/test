let roller = document.querySelector('.rolling1');
roller.id = 'roller1';
let roller_clone = roller.cloneNode(true);
roller_clone.id = 'roller2';

document.querySelector('.txt-slide-wrap').appendChild(roller_clone);

document.querySelector('#roller1').style.top = '0px';
document.querySelector('#roller2').style.top = document.querySelector('.rolling1 div').offsetwidth + 'px';

roller.classList.add('original');
roller_clone.classList.add('clone');

let wrap = document.querySelector('.txt-slide-wrap');

wrap.addEventListener("mouseover", (e)=>{
    roller.classList.remove('original');
    roller_clone.classList.remove('clone');
})

wrap.addEventListener("mouseleave", (e)=>{
    roller.classList.add('original');
    roller_clone.classList.add('clone');
})