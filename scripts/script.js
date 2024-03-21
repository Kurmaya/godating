
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
    document.body.style.overflow='hidden';
})
close.addEventListener('click',function(){
    document.querySelector('.nav-drop').classList.remove('active');
    document.body.style.overflowY='scroll';
})
gsap.registerPlugin(ScrollTrigger);
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

// tl.to(iHolder,{
//     left: '40%',
//     duration:1,
//     ease: "elastic.out(.2,0.3)",
// },'simultaneously')
// tl.to(one,{
//     left:'10%',
//     duration:.5,
//     ease: "elastic.out(.2,0.3)",
// },'simultaneously')
// tl.to(iHolder,{
//     left:'125%',
//     duration:.2,
//     delay:3,
// })
// tl.to(one,{
//     left:'-200%',
//     duration:.2,  
// })
// tl.to(iTwo,{
//     zIndex:'5',
// })
// tl.to(iHolder,{
//     left: '40%',
//     duration:.8,
//     ease: "elastic.out(.2,0.3)",
// })
// tl.to(two,{
//     left:'10%',
//     duration:.5,
//     ease: "elastic.out(.2,0.3)",
// })
// tl.to(iHolder,{
//     left:'125%',
//     duration:.2,
//     delay:2,
// })
// tl.to(two,{
//     left:'-200%',
//     duration:.2,
    
// })
// tl.to(iThree,{
//     zIndex:'5',
// })
// tl.to(iHolder,{
//     left: '40%',
//     duration:.8,
//     ease: "elastic.out(.2,0.3)",
// })
// tl.to(three,{
//     left:'10%',
//     duration:.3,
//     ease: "elastic.out(.2,0.3)",
// })
// tl.to(iHolder,{
//     left: '125%',
//     duration:.2,
//     delay:3,
// })
// tl.to(three,{
//     left:'-200%',
//     duration:.2,
    
// })

// animation for what section

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#what',
        start:'top 50%',
        end: 'bottom 50%',
        duration:.5,
        // toggleActions:"play reset play reset"
    }
});
tl2.from('.desc',{
    x:'-250%',
    ease: "elastic.out(.2,0.3)",
},'simultaneously')
tl2.from('.image-container',{
    x:'250%',
    ease: "elastic.out(.2,0.3)",
},'simultaneously');

//animation for features section
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#features",
        start: "top 50%",
        // end: "bottom 50%",
        // markers: true,
        // toggleActions: 'play reset play reset'
      }
})

circles.forEach((circle,i)=>{
    tl3.from(circle,{
        left:'150%',
        duration:.2,
        ease: "elastic.out(0.5,0.3)",
        stagger:0.2,
    })
})