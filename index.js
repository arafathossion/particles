


// Loader Js
$(document).ready(function(){
$('div#loading').removeAttr('id');
});
var preloader = document.getElementById("loading");
window.addEventListener('load', function(){
preloader.style.display = 'none';
})

function myFunction(){
preloader.style.display = 'none';
};

//TYPE WRITTER JS
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};



//progess_bar

$(document).ready(function(){

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller({ barColor: ' #1ebba3', duration: 3000 });
  $('#bar5').barfiller({ barColor: ' #1ebba3', duration: 3000 });
  $('#bar6').barfiller({ barColor: ' #1ebba3', duration: 3000 });
  $('#bar7').barfiller({ barColor: ' #1ebba3', duration: 3000 });
  $('#bar8').barfiller({ barColor: ' #1ebba3', duration: 3000 });
  
});



 
//MODE CHANGE JS
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});




// Color Change Switch Start
// Six Different Color Changef Switch
//========== 
var sky = document.getElementById('sky');
sky.addEventListener('change', () => {
document.body.classList.add('sky-color');
document.body.classList.remove('green-color','blue-color','protoss-pylon-color','sweet-garden-color','light-green-color');
});


var green = document.getElementById('green');
green.addEventListener('change', () => {
document.body.classList.add('green-color');
document.body.classList.remove('sky-color','blue-color','protoss-pylon-color','sweet-garden-color','light-green-color');
});


var blue = document.getElementById('blue');
blue.addEventListener('change', () => {
document.body.classList.add('blue-color');
document.body.classList.remove('sky-color','green-color','protoss-pylon-color','sweet-garden-color','light-green-color');
});


var blue = document.getElementById('protoss-pylon');
blue.addEventListener('change', () => {
document.body.classList.add('protoss-pylon-color');
document.body.classList.remove('sky-color','green-color','blue-color','sweet-garden-color','light-green-color');
});


var blue = document.getElementById('sweet-garden');
blue.addEventListener('change', () => {
document.body.classList.add('sweet-garden-color');
document.body.classList.remove('sky-color','green-color','blue-color','protoss-pylon-color','light-green-color');
});


var blue = document.getElementById('light-green');
blue.addEventListener('change', () => {
document.body.classList.add('light-green-color');
document.body.classList.remove('sky-color','green-color','blue-color','sweet-garden-color','protoss-pylon-color');
});
// Color Change Switch End




/////////// BOTTOM TO TOP Start
//========== 
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
/////////// BOTTOM TO TOP End




/////////// On Scrolling Active Class Change Start
//========== 
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

// Get current scroll position
let scrollY = window.pageYOffset;

// Now we loop through sections to get height, top and ID values for each
sections.forEach(current => {
  const sectionHeight = current.offsetHeight;
  const sectionTop = current.offsetTop -75;
  sectionId = current.getAttribute("id");
  
  /*
  - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
  - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
  */
  if (
    scrollY > sectionTop &&
    scrollY <= sectionTop + sectionHeight
  ){
    document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
  } else {
    document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
  }
});
}
/////////// On Scrolling Active Class Change End



// Sticky navbar Start
// =======
$(document).ready(function () {
// Custom function which toggles between sticky class (is-sticky)
var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
    }
    else {
        sticky.removeClass("is-sticky");
        stickyWrapper.height('auto');
    }
};

// Find all data-toggle="sticky-onscroll" elements
$('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
        stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
});
});
// Sticky navbar End