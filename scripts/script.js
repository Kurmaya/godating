
const navbar = document.querySelector('nav');
//navbar resize on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    // navbar.style.height = '10vh';
    navbar.classList.add('active');
    document.querySelector(".logo").classList.add('active');
  } else {
    // navbar.style.padding = "80px 10px";
    
    navbar.classList.remove('active');
    document.querySelector(".logo").classList.remove('active');
  }
}

const feats = document.querySelectorAll('.feat');
feats.forEach(feat => {
    feat.addEventListener('mouseover',(e)=>{
        feat.querySelector('h3').classList.add('active');
    })
    feat.addEventListener('mouseleave',(e)=>{
        feat.querySelector('h3').classList.remove('active');
    })
});
const one = document.querySelector('.head-one'),
two =document.querySelector('.head-two'),
three =document.querySelector('.head-three'),
iOne= document.querySelector('.one'),
iTwo =document.querySelector('.two'),
iThree =document.querySelector('.three'),
iHolder =document.querySelector('.img-holder');
const circles = document.querySelectorAll('.feat');
const drop = document.querySelector('.dots');
const close = document.querySelector('.close');
const mages = document.querySelectorAll('.hero .img-holder img');
const heroY = document.querySelector('.what-container').getBoundingClientRect().height;
const heroX = document.querySelector('.hero').getBoundingClientRect().width;
const sections = document.querySelectorAll('section');
drop.addEventListener('click',function(){
    document.querySelector('.nav-drop').classList.add('active');
    drop.style.opacity='0';
    document.body.style.overflow='hidden';
})
close.addEventListener('click',function(){
    document.querySelector('.nav-drop').classList.remove('active');
    drop.style.opacity='1';
    document.body.style.overflowY='scroll';
})
gsap.registerPlugin(ScrollTrigger);
if(window.innerWidth<786){
    document.querySelector('.dots img').src='./assets/images/mobile-hearts.png'
}

if(window.innerWidth>786){
    
    //hero section animation
let tl = gsap.timeline({repeat:-1});
tl.to(mages[0],{
    left: '0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
})
tl.to(one,{
    left:'0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
},'<')
tl.to(mages[0],{
    left:'200%',
    duration:.2,
    delay:3,
})
tl.to(one,{
    left:'-200%',
    duration:.2,  
},'<')

tl.to(mages[1],{
    left: '0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
})
tl.to(two,{
    left:'0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
},'<')
tl.to(mages[1],{
    left:'200%',
    duration:.2,
    delay:3,
})
tl.to(two,{
    left:'-200%',
    duration:.2, 
},'<')

tl.to(mages[2],{
    left: '0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
})
tl.to(three,{
    left:'0',
    duration:1,
    ease: "elastic.out(.2,0.3)",
},'<')
tl.to(mages[2],{
    left: '200%',
    duration:.2,
    delay:3,
})
tl.to(three,{
    left:'-200%',
    duration:.2,
    
},'<')

// animation for what section

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#what',
        start:'top 50%',
        duration:.5,
        toggleActions:"play none play reverse"
    }
});
tl2.to('.red-circle',{
    y:'+=110vh',
    // x:heroX,
},'simultaneously')
tl2.to('.black-circle',{
    y:'+=80vh',
    width:'500px',
    height:'500px',
    left:'95%',
},'simultaneously')
tl2.from('.desc',{
    x:'-250%',
    ease: "elastic.out(.2,0.3)",
},'simultaneously')
tl2.from('.image-container',{
    x:'250%',
    ease: "elastic.out(.2,0.3)",
},'simultaneously');

//animation for features section
// const featX= document.getElementById('features').getBoundingClientRect().width;
// const featY= document.getElementById('features').getBoundingClientRect().top;
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#features",
        start: "top 60%",
        toggleActions: 'play none play reverse'
      }
})
tl3.to('.black-circle',{
    y:'+=110vh',
},'simultaneously')
tl3.to('.red-circle',{
    y:'+=110vh',
    // x:featX-'50px',
},'simultaneously')
circles.forEach((circle,i)=>{
    tl3.from(circle,{
        left:'150%',
        duration:.1,
        ease: "power1",
        stagger:0.05,
    })
},'simultaneously');
// animation for how to section

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#howto",
        start: "top 60%",
        // end: "bottom 50%",
        // markers: true,
        toggleActions: 'play none play reverse'
      }
})

tl4.to('.black-circle',{
    y: '+=95vh',
    width:'600px',
    height:'400px'
    // x: '-110vw',
},'simultaneously')
tl4.to('.red-circle',{
    y:'+=90vh',
    // x:'105vw',
},'simultaneously')
tl4.from('#howto h2',{
    x:'-100vw',
    opacity:0,
    ease: "elastic.out(.2,0.3)",
})

tl4.from('#howto h4',{
    left:'-=100vw',
    ease: "elastic.out(.4,0.6)",
},'+=.1')
tl4.from('#howto button',{
    x:'150vw',
    opacity:0,
    ease: "elastic.out(.4,0.6)",
},'+=.1')
tl4.from('.howto-img-container',{
    y:'200vh',
    opacity:0,
    ease: "elastic.out(.4,0.6)",
},'<')



let phoneAnim = gsap.timeline();


//faq animation
let faqAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#faq',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})
faqAnim.to('.red-circle',{
    x:20,
    y:'+=800',
    ease:'power1'
},'simultaneously')
faqAnim.to('.black-circle',{
    // x:-120,
    y:'+=80vh',
    ease:'power1',
    width:'+=350px',
    height:'+=550px'

},'simultaneously')
faqAnim.from('.faq-img-holder',{
    x:-1500,
    duration:.3,
    ease: "elastic.out(.6,0.4)",
})
faqAnim.from('.faqs',{
    x:1800,
    duration:.3,
    ease: "elastic.out(.3,0.2)",
})

//testimonials animation
const cards = document.querySelectorAll('.card');
let testiAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#testimonials',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})
testiAnim.to('.red-circle',{
    x:20,
    y:'+=100vh',
    ease:'power1'
},'simultaneously')
testiAnim.to('.black-circle',{
    // x:-120,
    y:'+=120vh',
    ease:'power1',
    width:'350px',
    height:'550px'

},'simultaneously')
testiAnim.to('.download',{
    opacity:1,
    duration:.2,
    ease:'none',
})

cards.forEach((card,i)=>{
    testiAnim.to(card,{
        scale:1,
        duration:.1,
        ease: "power1",
        // stagger:0.05,
    })
},'simultaneously');

let getAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#getApp',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})

getAnim.to('.red-circle',{
    y:'+=90vh',
    ease:'none'
},'simultaneously')
getAnim.to('.black-circle',{
    y:'+=110vh',
    ease:'none'
},'simultaneously')
getAnim.to('.download',{
    display:'none',
    duration:.2,
    ease:'none',
})
getAnim.from('#getApp h2',{
    opacity:0,
    y:500,
    duration:.3,
    ease: "elastic.out(.6,0.4)",
})
getAnim.from('.getApp-wrapper',{
    opacity:0,
    y:500,
    duration:.3,
    ease: "elastic.out(.6,0.4)",
})

let aboutAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#about',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})

aboutAnim.to('.red-circle',{
    y:'+=110vh',
    ease:'none'
},'simultaneously')
aboutAnim.to('.black-circle',{
    y:'+=87vh',
    // top:'200%',
    width:'350px',
    height:'295px',
    borderRadius:'50% 50% 0 50%',
    zIndex:'10',
    ease:'power1'
},'simultaneously')
aboutAnim.to('.download',{
    display:'grid',
    duration:.2,
    ease:'none',
})

aboutAnim.to('.red-circle',{
    opacity:0,
    x:'+=50vw',
    y:'-=25vh',
    duration:.5,
    height:'0',
})
aboutAnim.to('.about',{
    width:'120%',
    height:'175%',
    background:'#D92728',
    borderRadius:'50% 50% 50% 50%',
    ease: "elastic.out(.7,0.4)",
    duration:.5,
    zIndex:'-1'

},'<')
}


