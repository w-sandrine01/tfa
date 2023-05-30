import { gsap} from 'gsap';



// Open div /////////////////////////////////////////////////////////////

const pros = document.querySelectorAll('.pro');
const contents = document.querySelectorAll('.contentOpen');
const pro1 = document.querySelector('.pro:first-of-type');


const apps = document.querySelectorAll('.app');
const app1 = document.querySelector('.app:first-of-type');

contents.forEach((content) => {
    content.style.visibility = "hidden";
})


// For the pros /////////////////////////////////////

pro1.querySelector('.contentOpen').style.visibility = "visible";
pro1.querySelector('.contentClosed').style.visibility = "hidden";

pros.forEach((pro) => {
    pro.addEventListener('click',()=>{
        
        pros.forEach((pro) => {
            pro.classList.remove('active');
            pro.querySelector('.contentOpen').style.visibility = "hidden";
            pro.querySelector('.contentClosed').style.visibility = "visible";   
            pro.style.flex = ''; 
        })

        pro.classList.add('active');
        pro.querySelector('.contentOpen').style.visibility = "visible";
        pro.querySelector('.contentClosed').style.visibility = "hidden";
        pro.style.flex = '3';
    })

    pro.addEventListener('mouseover', () => {
        if(!pro.classList.contains('active')){
            pro.style.flex = '1';
        }
    })
    pro.addEventListener('mouseout', () => {
        if(!pro.classList.contains('active')){
            pro.style.flex = '';
        }
    })

})


// For the apps ////////////////////////////////////

app1.querySelector('.contentOpen').style.visibility = "visible";
app1.querySelector('.contentClosed').style.visibility = "hidden";

apps.forEach((app) => {
    app.addEventListener('click',()=>{
        
        apps.forEach((app) => {
            app.classList.remove('active');
            app.querySelector('.contentOpen').style.visibility = "hidden";
            app.querySelector('.contentClosed').style.visibility = "visible";  
            app.style.flex = '';
        })

        app.classList.add('active');
        app.querySelector('.contentOpen').style.visibility = "visible";
        app.querySelector('.contentClosed').style.visibility = "hidden";
        app.style.flex = '3';
    })

    app.addEventListener('mouseover', () => {
        if(!app.classList.contains('active')){
            app.style.flex = '0.6';
        }
    })
    app.addEventListener('mouseout', () => {
        if(!app.classList.contains('active')){
            app.style.flex = '';
        }
    })
    
})






// Drag and drop ///////////////////////////////////


const dragElements = document.querySelectorAll('.drag--q1');

dragElements.forEach(function(el) {
  let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;

  const container = document.querySelector('.container--q1');
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  const maxX = containerWidth - el.offsetWidth;
  const maxY = containerHeight - el.offsetHeight;

  el.addEventListener('mousedown', function(e){
    e.preventDefault();
    startPosX = e.clientX;
    startPosY = e.clientY;
    e.target.style.zIndex = parseInt(e.target.style.zIndex || 0) + 1;

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', function(){
      document.removeEventListener('mousemove', mouseMove);
    });
  });

  function mouseMove(e) {
    newPosX = startPosX - e.clientX;
    newPosY = startPosY - e.clientY;

    startPosX = e.clientX;
    startPosY = e.clientY;

    const newLeft = Math.max(0, Math.min(el.offsetLeft - newPosX, maxX));
    const newTop = Math.max(0, Math.min(el.offsetTop - newPosY, maxY));

    el.style.top = newTop + "px";
    el.style.left = newLeft + "px";
  }


  el.addEventListener('click', function() {
    // Get the maximum z-index among all elements
    const maxZIndex = Array.from(document.querySelectorAll('.drag'))
      .reduce((max, el) => Math.max(max, +el.style.zIndex || 0), 0);
    
    // Set the clicked element's z-index to be one greater than the maximum
    el.style.zIndex = maxZIndex + 1;
  });
});



const dragElementsQ2 = document.querySelectorAll('.drag--q2');

dragElementsQ2.forEach(function(el) {
    let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
  
    const container = document.querySelector('.container--q2');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    const maxX = containerWidth - el.offsetWidth;
    const maxY = containerHeight - el.offsetHeight;
  
    el.addEventListener('mousedown', function(e){
      e.preventDefault();
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      document.addEventListener('mousemove', mouseMove);
  
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', mouseMove);
      });
    });
  
    function mouseMove(e) {
      newPosX = startPosX - e.clientX;
      newPosY = startPosY - e.clientY;
  
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      const newLeft = Math.max(0, Math.min(el.offsetLeft - newPosX, maxX));
      const newTop = Math.max(0, Math.min(el.offsetTop - newPosY, maxY));
  
      el.style.top = newTop + "px";
      el.style.left = newLeft + "px";
    }

    el.addEventListener('click', function() {
        // Get the maximum z-index among all elements
        const maxZIndex = Array.from(document.querySelectorAll('.drag'))
          .reduce((max, el) => Math.max(max, +el.style.zIndex || 0), 0);
        
        // Set the clicked element's z-index to be one greater than the maximum
        el.style.zIndex = maxZIndex + 1;
      });
  });
  
  


const dragElementsQ3 = document.querySelectorAll('.drag--q3');

dragElementsQ3.forEach(function(el) {
    let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
  
    const container = document.querySelector('.container--q3');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    const maxX = containerWidth - el.offsetWidth;
    const maxY = containerHeight - el.offsetHeight;
  
    el.addEventListener('mousedown', function(e){
      e.preventDefault();
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      document.addEventListener('mousemove', mouseMove);
  
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', mouseMove);
      });
    });
  
    function mouseMove(e) {
      newPosX = startPosX - e.clientX;
      newPosY = startPosY - e.clientY;
  
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      const newLeft = Math.max(0, Math.min(el.offsetLeft - newPosX, maxX));
      const newTop = Math.max(0, Math.min(el.offsetTop - newPosY, maxY));
  
      el.style.top = newTop + "px";
      el.style.left = newLeft + "px";
    }
  });

  



const dragElementsQ4 = document.querySelectorAll('.drag--q4');

dragElementsQ4.forEach(function(el) {
    let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
  
    const container = document.querySelector('.container--q4');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    const maxX = containerWidth - el.offsetWidth;
    const maxY = containerHeight - el.offsetHeight;
  
    el.addEventListener('mousedown', function(e){
      e.preventDefault();
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      document.addEventListener('mousemove', mouseMove);
  
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', mouseMove);
      });
    });
  
    function mouseMove(e) {
      newPosX = startPosX - e.clientX;
      newPosY = startPosY - e.clientY;
  
      startPosX = e.clientX;
      startPosY = e.clientY;
  
      const newLeft = Math.max(0, Math.min(el.offsetLeft - newPosX, maxX));
      const newTop = Math.max(0, Math.min(el.offsetTop - newPosY, maxY));
  
      el.style.top = newTop + "px";
      el.style.left = newLeft + "px";
    }

    el.addEventListener('click', function() {
        const maxZIndex = Array.from(document.querySelectorAll('.drag'))
          .reduce((max, el) => Math.max(max, +el.style.zIndex || 0), 0);
        
        el.style.zIndex = maxZIndex + 1;
      });
  });




// Mobile ///////////////////////////////////////////////////////:::

dragElements.forEach(function(el) {
    let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
  
    const container = document.querySelector('.container--q1');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    const maxX = containerWidth - el.offsetWidth;
    const maxY = containerHeight - el.offsetHeight;
  
    el.addEventListener('touchstart', function(e) {
      e.preventDefault();
      startPosX = e.touches[0].clientX;
      startPosY = e.touches[0].clientY;
  
      document.addEventListener('touchmove', touchMove);
  
      document.addEventListener('touchend', function() {
        document.removeEventListener('touchmove', touchMove);
      });
    });
  
    function touchMove(e) {
      newPosX = startPosX - e.touches[0].clientX;
      newPosY = startPosY - e.touches[0].clientY;
  
      startPosX = e.touches[0].clientX;
      startPosY = e.touches[0].clientY;
  
      const newLeft = Math.max(0, Math.min(el.offsetLeft - newPosX, maxX));
      const newTop = Math.max(0, Math.min(el.offsetTop - newPosY, maxY));
  
      el.style.top = newTop + "px";
      el.style.left = newLeft + "px";
    }
  });
  









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








// Move with mouse ///////////////////////////////////

// let container = document.querySelector('.interviews');
let objects = document.querySelectorAll('.object');

document.addEventListener("mousemove", function move(e){
    let X = e.clientX;
    let Y = e.clientY;
  
    objects[0].style.transform = "translate(" + X/10 + "px, "+ Y/5 + "px)";
    objects[1].style.transform = "translate(" + X/2 + "px, "+ Y/7 + "px)";

    objects[2].style.transform = "translate(" + X/5 + "px, "+ Y/5 + "px)";
    objects[3].style.transform = "translate(" + X/7 + "px, "+ Y/2 + "px)";
    objects[4].style.transform = "translate(" + X/4 + "px, "+ Y/7 + "px)";
    objects[5].style.transform = "translate(" + X/9 + "px, "+ Y/9 + "px)";
  }
);







// Parallax ///////////////////////////////////

gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray(".container__parallax").forEach((container, i) => {
  container.bgp = container.querySelector(".bgp"); 
  
  gsap.fromTo(container.bgp, {

//     backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% -450px"
// }, {


    backgroundPosition: `50% ${-window.innerHeight * getRatio(container)}px`,
    backgroundSize: "120%"
  }, {
    backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(container))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true, 

      onUpdate: (self) => {
        const scrollSpeed = 14; 
        const newBackgroundPosition = `50% ${-window.scrollY / scrollSpeed}px`;
        gsap.set(container.bgp, { backgroundPosition: newBackgroundPosition });
      }
    }
  });

});





