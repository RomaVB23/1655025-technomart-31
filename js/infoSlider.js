const sliders = document.querySelectorAll('.info-slide');
const slidersButtons = document.querySelectorAll('.slider-controls--button');

slidersButtons.forEach((button, index) => {
   button.addEventListener('click', (cl) =>{
       sliders.forEach( slide => {
           slide.classList.add('slide-close')
           slide.classList.remove('slide-current')
       })
   sliders[index].classList.add('slide-current')

   slidersButtons.forEach( btn=> {
       btn.classList.remove('current-button')
   })
   cl.target.classList.add('current-button')
    })
})
