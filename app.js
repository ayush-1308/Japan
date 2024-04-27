
//navbar color change on scroll
$(document).ready(function () {
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        if (scroll > 150){
            $(".navbar").css("background" , "#222");
            $(".navbar").css("box-shadow" , "rgba(0, 0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background" , "transparent");
            $(".navbar").css("box-shadow" , "none");
        }
    })
});

//smooth scrolling
var navBarHeight = $('.navbar').outerHeight();
$(".navbar-menu a").click(function (e){
    var targetHref = $(this).attr('href');
    $("html, body").animate({
        scrollTop: $(targetHref).offset().top - navBarHeight
    }, 1000);
    e.preventDefault();
})

// navbar toggler mobile
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector(".navbar-menu");
mobile.addEventListener('click', function(){
    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');
});

mobileLink.addEventListener('click', function(){
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 & menuBars){
        mobile.classList.toggle('is-active');
        mobileLink.classList.remove('active')
    }
});



//swiper slider for testimonials
var swiper = new Swiper('.mySwiper',
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});


// About page
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})