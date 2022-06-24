let person2 = {
    name: 'Jan',
    lastName: 'Nowak'
};
console.log(person2.name + " " + person2.lastName)

let activeSlideNumber = 1;
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

window.scrollTo(0, document.body.scrollHeight);

let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active')
    activeElement.classList.remove('active')
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if(activeSlideNumber===3) {
        activeSlideNumber=1;
    }
    else {
        activeSlideNumber = activeSlideNumber + 1;   
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if(activeSlideNumber===1) {
        activeSlideNumber=3;
    }
    else {
        activeSlideNumber = activeSlideNumber - 1;   
    }
    showSlide(activeSlideNumber);
};

let showSlide1 = () => {
    activeSlideNumber = 1;
    let activeElement = document.querySelector('.active');
    showSlide(1);
};

let showSlide2 = () => {
    activeSlideNumber = 2;
    let activeElement = document.querySelector('.active');
    showSlide(2);
};

let showSlide3 = () => {
    activeSlideNumber = 3;
    let activeElement = document.querySelector('.active');
    showSlide(3);
};

for(let i=1; i<=3; i++) {
    let showSlideI = () => {
        activeSlideNumber = 1;
        showSlide(i);
    }
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);