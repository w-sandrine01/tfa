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




// Move with mouse /////////////////////////////////////////////////////////////

