/* RFER TO in-view.js */

const menu = document.querySelector('.menuContainer');
function menuAbsolute(){
    menu.classList.remove('menu-fixed');
    menu.classList.add('menu-absolute');
}
function menuFixed(){
    menu.classList.remove('menu-absolute');
    menu.classList.add('menu-fixed');
}
//here we want to detect our section enter the viewport
//when it does add a class' viewport', and
//when it's exists we want to remove it
inView('.section')
    .on('enter', section =>{
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

inView('.intro')
    .on('enter', el =>{
        menuAbsolute();
    })
    .on('exit', el => {
        menuFixed();
    });

var checkIntro = inView.is(document.querySelector('.intro'));
var checkMenu = inView.is(document.querySelector('.menuContainer'));

    if((checkIntro && !checkMenu) || !checkIntro){
        menuFixed();
    }


//here we set the class to add only on we have scroll 0.5 of the viewport
inView.threshold(0.5);

/* RFER TO tilt.js */
/*
const images = document.querySelectorAll(".image");
VanillaTilt.init(images, {
    max: 25,
    speed: 400
});
*/
/* smooth scrolling to anchor */

// Get current location's distance from the top of the page
var position = window.pageYOffset;

// Get an element's distance from the top of the page
var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};


const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {

    anchor.addEventListener('click', event => {
        const href = anchor.getAttribute('href');
        if(href.charAt(0) === '#') {
            event.preventDefault();
            var elem = document.querySelector(href);
            var location = getElemDistance( elem ) - (window.innerHeight * 13 / 100);
            window.scrollTo({top: location, left: 0, behavior: 'smooth'});
        }
    });
});
