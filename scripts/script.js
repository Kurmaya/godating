
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

//hero section animation
let tl = gsap.timeline({repeat:-1});
tl.to(iHolder,{
    left: '45%',
    duration:1,
    ease: "elastic.out(.2,0.3)",
},'simultaneously')
tl.to(one,{
    left:'15%',
    duration:.5,
    ease: "elastic.out(.2,0.3)",
},'simultaneously')
tl.to(iHolder,{
    left:'125%',
    duration:.2,
    delay:3,
})
tl.to(one,{
    left:'-200%',
    duration:.2,  
})
tl.to(iTwo,{
    zIndex:'5',
})
tl.to(iHolder,{
    left: '45%',
    duration:.8,
    ease: "elastic.out(.2,0.3)",
})
tl.to(two,{
    left:'15%',
    duration:.5,
    ease: "elastic.out(.2,0.3)",
})
tl.to(iHolder,{
    left:'125%',
    duration:.2,
    delay:2,
})
tl.to(two,{
    left:'-200%',
    duration:.2,
    
})
tl.to(iThree,{
    zIndex:'5',
})
tl.to(iHolder,{
    left: '45%',
    duration:.8,
    ease: "elastic.out(.2,0.3)",
})
tl.to(three,{
    left:'15%',
    duration:.3,
    ease: "elastic.out(.2,0.3)",
})
tl.to(iHolder,{
    left: '125%',
    duration:.2,
    delay:3,
})
tl.to(three,{
    left:'-200%',
    duration:.2,
    
})

// animation for what section
const heroY = document.querySelector('.hero').getBoundingClientRect().height;
const heroX = document.querySelector('.hero').getBoundingClientRect().width;
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#what',
        start:'top 50%',
        end: 'bottom 50%',
        duration:.5,
        toggleActions:"play none play reverse"
    }
});
tl2.to('.red-circle',{
    y:heroY,
    x:heroX,
},'simultaneously')
tl2.to('.black-circle',{
    y:heroY,
    x:-heroX-250,
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
const featX= document.getElementById('features').getBoundingClientRect().width;
const featY= document.getElementById('features').getBoundingClientRect().top;
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#features",
        start: "top 60%",
        // end: "bottom 50%",
        // markers: true,
        toggleActions: 'play none play reverse'
      }
})
tl3.to('.black-circle',{
    y:featY-(featY/2),
    x:-featX-'100px',
},'simultaneously')
tl3.to('.red-circle',{
    y:featY-100,
    x:featX-'50px',
},'simultaneously')
circles.forEach((circle,i)=>{
    tl3.from(circle,{
        left:'150%',
        duration:.1,
        ease: "power1",
        // stagger:0.05,
    })
});
// animation for how to section
const howtoX = document.getElementById('howto').getBoundingClientRect().width;
const howtoY = document.getElementById('howto').getBoundingClientRect().top;

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#howto",
        start: "top 60%",
        // end: "bottom 50%",
        // markers: true,
        toggleActions: 'play none play reverse'
      }
})
tl4.from('#howto h2',{
    x:'-100vw',
    opacity:0,
    ease: "elastic.out(.2,0.3)",
})
tl4.to('.black-circle',{
    y: '+=700',
    x: '-110vw',
},'simultaneously')
tl4.to('.red-circle',{
    y:'+=700',
    x:'105vw',
},'simultaneously')

tl4.from('.howto-img-container',{
    y:'200vh',
    opacity:0,
    ease: "elastic.out(.2,0.3)",
})

const phone= document.querySelector('.howto-img-wrapper');
const phoneImg =document.querySelector('.howto-inner-img');
// var rule = CSSRulePlugin.getRule('.howto-img-wrapper::before');
let phoneAnim = gsap.timeline();
let count = 0;
phone.addEventListener('click',function(){
    
    count++;
    console.log(count);
    phoneAnim.to(phoneImg,{
        backgroundPosition:'-300px -35px',
        duration:.3,
        ease:'none'
    })
 
    phoneAnim.to(phoneImg,{
        backgroundPosition:'1px -35px',
        duration:.3,
        ease:'none',
    })
    // if(count == 1){
    //     phon
    // }
})
//testimonials animation
let testiAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#testimonials',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})
testiAnim.to('.red-circle',{
    x:20,
    y:'+=800',
    ease:'power1'
},'simultaneously')
testiAnim.to('.black-circle',{
    x:-120,
    y:'+=1300',
    ease:'power1',
    width:'+=350px',
    height:'+=350px'

},'simultaneously')