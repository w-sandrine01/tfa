import { gsap} from 'gsap';



// Ouvrir div /////////////////////////////////////////////////////////////

const pros = document.querySelectorAll('.pro');
const contents = document.querySelectorAll('.contentOpen');
const pro1 = document.querySelector('.pro:first-of-type');


const apps = document.querySelectorAll('.app');
const app1 = document.querySelector('.app:first-of-type');

contents.forEach((content) => {
    content.style.visibility = "hidden";
})

pro1.querySelector('.contentOpen').style.visibility = "visible";
pro1.querySelector('.contentClosed').style.visibility = "hidden";

app1.querySelector('.contentOpen').style.visibility = "visible";
app1.querySelector('.contentClosed').style.visibility = "hidden";


pros.forEach((pro) => {
    pro.addEventListener('click',()=>{
        
        pros.forEach((pro) => {
            pro.classList.remove('active');
            pro.querySelector('.contentOpen').style.visibility = "hidden";
            pro.querySelector('.contentClosed').style.visibility = "visible";    
        })

        pro.classList.add('active');
        pro.querySelector('.contentOpen').style.visibility = "visible";
        pro.querySelector('.contentClosed').style.visibility = "hidden";
    })
})





apps.forEach((app) => {
    app.addEventListener('click',()=>{
        
        apps.forEach((app) => {
            app.classList.remove('active');
            app.querySelector('.contentOpen').style.visibility = "hidden";
            app.querySelector('.contentClosed').style.visibility = "visible";    
        })

        app.classList.add('active');
        app.querySelector('.contentOpen').style.visibility = "visible";
        app.querySelector('.contentClosed').style.visibility = "hidden";
    })
})








// Slideshow ///////////////////////////////////

let widthContent = document.querySelector('.slideshow__content');
let widthWireframes = document.querySelector('.slideshow__wireframes');
let number = document.querySelector('.numActive');

    
let textSlides = document.getElementsByClassName("slide__text");
let imgSlides = document.getElementsByClassName("wireframe");
let etape = 0;
let nbSlide = textSlides.length;
let prev = document.querySelector(".previous");
let next = document.querySelector(".next");


for(let i = 0; i < nbSlide; i++){
    textSlides[i].style.width = widthContent.offsetWidth - 144 + "px";
    imgSlides[i].style.width = widthWireframes.offsetWidth + "px";
}



function removeActive(){
    for(let i = 0; i < nbSlide; i++){        
        textSlides[i].classList.remove('active');
        imgSlides[i].classList.remove('active');
    }
}

if(next){
    next.addEventListener('click',function(){
    etape++;
    
    if(etape >= nbSlide){ 
        etape=0;
    }

    removeActive();

    textSlides[etape].classList.add('active');
    imgSlides[etape].classList.add('active');
    number.textContent = "0" + (etape+1);
})
}

if(prev){
    prev.addEventListener('click', function(){
    etape--;
    
    if(etape < 0){ 
        etape = nbSlide-1;
    }

    removeActive();

    textSlides[etape].classList.add('active');
    imgSlides[etape].classList.add('active');
    number.textContent = "0" + (etape+1);


})
}
