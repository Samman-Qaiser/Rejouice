const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


  
  function loader(){
    var loader=document.querySelector('.loader')
    tl = gsap. timeline()
    tl.from(".loader h1",{
      x:40,
      duration:1.5,
      stagger:0.3,
      opacity:0,

    })
    tl.to(".loader h1",{
      x:-40,
      delay:1,
      opacity:0,
      stagger:-0.3
    })
   tl.to(".loader",{
    y:"-150%"
   })
   tl.from(".page1 h1 span",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.3

  })

  }
  function gola(){
   var page1=document.querySelector('.page1')
  // var cursor=document.querySelector('.gola')
  // page1.addEventListener("mousemove",function(dets){
  //    cursor.style.left=dets.x+'px'
  //    cursor.style.top=dets.y+'px'
 
    page1.addEventListener("mousemove",function(dets){
      gsap.to(".gola",{
         x:dets.x,
         y:dets.y
      })
    })
   var page5=document.querySelector('.page5')
   page5.addEventListener("mousemove",function(dets){
    gsap.to(".gola",{
      x:dets.x,
      y:dets.y,
     
    })
   })
  }
  function menu_close() {
    var close = document.querySelector('.close');
    var menu_page = document.querySelector('.menu-page');
    if (close && menu_page) {
        close.addEventListener('click', function() {
            menu_page.style.top = "-100%";
        });
    }
}

function menu_open() {
    var open = document.querySelector('.h4-menu');
    var menu_page = document.querySelector('.menu-page');
    if (open && menu_page) {
        open.addEventListener('click', function() {
            menu_page.style.top = "0";
        });
    }
}
function swiper(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1000, // Increase delay for slower autoplay (e.g., 5000ms or 5 seconds)
        disableOnInteraction: false,
      },
      speed: 4500, // Increase speed for slower transition (e.g., 1500ms or 1.5 seconds)
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  function footer(){
    // var footer_lower=document.querySelector('.footer-lower')
    // var footer=document.querySelector('.footer')
    // footer.addEventListener("mouseenter",function(){
    //   footer_lower.style.bottom="0"
    // })
    // footer.addEventListener("mouseleave",function(){
    //    footer_lower.style.bottom="-100%"
    // })
    gsap.from(".footer h1 span" ,{
       y:"40%",
       opacity:0,
       duration:1,
       stagger:0.3,
       repeat:-1,
       scrollTrigger:{
        trigger:".footer",
        scroller:".main",
        
        
      }
    })
  }
  function page2animation(){
    gsap.from(".page2 h1 span " ,{
      y:600,
      stagger:0.4,
      duration:2,
      opacity:0,
       
      scrollTrigger:{
        trigger:".page2",
        scroller:".main",
         start:"top 60%",
         end:"bottom 100%",
        scrub:2
      }

    })
    
    


  }
 
// loader()
menu_open()
menu_close()
swiper()
footer()
page2animation()

gola()