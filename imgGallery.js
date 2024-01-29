const slide = document.querySelectorAll('.slide')
const next = document.querySelector('#next');
const prev = document.querySelector('#prev')

//Auto slide
const auto = true;
const intervalTime=8000;

let slideInterval
const nextSlide=()=>{
    const current=document.querySelector('.current');
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add
        ('current')
    }else {
        slides[0].classList.add('current');
    }
    setTimeout(()=>current.add('current'));
    };
    next.addEventListener('click',e=>{
        nextSlide();
        if (auto){
            clearInterval(slideInterval);
            slideInterval = setInterval (nextSlide,intervalTime);
        }
    })


const prevSlide=()=>{
    const current=document.querySelector('.current');
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add
        ('current')
    }else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
    };

    prev.addEventListener('click',e=>{
        prevSlide();
    })