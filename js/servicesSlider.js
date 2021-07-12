const servicesSliders = document.querySelectorAll('.services-slid');
const servicesSlidersButtons = document.querySelectorAll('.services-item');


servicesSlidersButtons.forEach((button, index) => {
    button.addEventListener('click', (cl) =>{
        servicesSliders.forEach( slide => {
            slide.classList.add('services-slid-close')
            
        })
        servicesSliders[index].classList.remove('services-slid-close')

    servicesSlidersButtons.forEach( btn=> {
        btn.classList.remove('services-item-active')
    })
    cl.target.classList.add('services-item-active')
     })
 })
