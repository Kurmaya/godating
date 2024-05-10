
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
const mages = document.querySelectorAll('.hero .img-holder img');
const heroY = document.querySelector('.what-container').getBoundingClientRect().height;
const heroX = document.querySelector('.hero').getBoundingClientRect().width;
const sections = document.querySelectorAll('section');
const items = document.querySelectorAll('.mobile-features-item');



gsap.registerPlugin(ScrollTrigger);
if(window.innerWidth<786){
    document.querySelector('.dots img').src='./assets/images/mobile-hearts.png'
}
//tablet
if(window.innerWidth<999 && window.innerWidth>600 ){
 
    //hero animation
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
    //tablet features animation
    
    let featAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#features',
            start:'top 70%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    featAnim2.from('#features h2',{
        x:-1000,
        duration:.4,
        ease: "elastic.out(.7,0.4)",

    })
    items.forEach((item,i)=>{
        featAnim2.from(item,{
            x:'150%',
            duration:.3,
            ease: "elastic.out(.4,0.3)",
            // stagger:0.05,
        })
    },'simultaneously');
    //tablet howto animation
    let howtoAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#howto',
            start:'top 80%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    howtoAnim2.from('#howto h2',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    howtoAnim2.from('#howto h4',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'-=.1')
    howtoAnim2.from('.howto-img-container',{
        x:1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'-=.3')
    howtoAnim2.from('.howto-write',{
        x:1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'<')
    //tablet faqs animation
    let faqAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#faq',
            start:'top center',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    faqAnim2.from('#faq h2',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    faqAnim2.from('.faq-wrapper',{
        x:1000,
        duration:.3,
        ease: "elastic.out(.7,0.4)",
    },'-=.1')
    faqAnim2.from('.faq-img-holder',{
        opacity:0,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    //tablet testimonials animation
    // let testiAnim2 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'#testimonials',
    //         start:'top center',
    //         // makers:true,
    //         toggleActions: 'play none play reverse'
    //     }
    // })
    // testiAnim2.from('.testimonials-wrapper',{
    //     left:1000,
    //     duration:1,
    //     ease: "elastic.out(.7,0.4)",
    // })
    //ablet getApp animation
    let getAnim2 = gsap.timeline({
        scrollTrigger:{
            trigger:'#getApp',
            start:'top 50%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    getAnim2.from('#getApp h2',{
        left:-1000,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    })
    getAnim2.from('#getApp h4',{
        left:-1000,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'-=.1')
    getAnim2.from('.getApp-wrapper',{
        y:500,
        opacity:0,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'-=.1')
    getAnim2.from('.download-holder',{
        // y:500,
        opacity:0,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'<')
   
    getAnim2.from('.getApp-bg',{
        width:0,
        height:0,
        duration:.5,
        display:'block',
        ease: "elastic.out(.7,0.4)",
    },'-=.5')

    //tablet about animation
    let aboutAnim = gsap.timeline({
        scrollTrigger:{
            trigger:'#about',
            start:'top 40%',
            toggleActions: 'play none play reverse'
        }
    })
    aboutAnim.to('.download',{
        display:'grid',
        duration:.2,
        ease:'none',
    })
    
    aboutAnim.to('.about',{
        width:'1250px',
        height:'1250px',
        background:'#D92728',
        borderRadius:'50% 50% 50% 50%',
        ease: "elastic.out(.7,0.4)",
        duration:2,
        zIndex:'-1'
    
    },'<')
    
}
//desktop 
if(window.innerWidth>1000){
    
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
        start:'top 60%',
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
        left:'150vw',
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


// //faq animation
// let faqAnim = gsap.timeline({
//     scrollTrigger:{
//         trigger:'#faq',
//         start:'top 50%',
//         toggleActions: 'play none play reverse'
//     }
// })
// faqAnim.to('.red-circle',{
//     x:20,
//     y:'+=800',
//     ease:'power1'
// },'simultaneously')
// faqAnim.to('.black-circle',{
//     // x:-120,
//     y:'+=80vh',
//     ease:'power1',
//     width:'+=350px',
//     height:'+=550px'

// },'simultaneously')
// faqAnim.from('.faq-img-holder',{
//     x:-1500,
//     duration:.3,
//     ease: "elastic.out(.6,0.4)",
// })
// faqAnim.from('.faqs',{
//     x:1800,
//     duration:.3,
//     ease: "elastic.out(.3,0.2)",
// })

//testimonials animation
// const cards = document.querySelectorAll('.card');
// let testiAnim = gsap.timeline({
//     scrollTrigger:{
//         trigger:'#testimonials',
//         start:'top 50%',
//         toggleActions: 'play none play reverse'
//     }
// })
// testiAnim.to('.red-circle',{
//     x:20,
//     y:'+=100vh',
//     ease:'power1'
// },'simultaneously')
// testiAnim.to('.black-circle',{
//     // x:-120,
//     y:'+=120vh',
//     ease:'power1',
//     width:'350px',
//     height:'550px'

// },'simultaneously')
// testiAnim.to('.download',{
//     opacity:1,
//     duration:.2,
//     ease:'none',
// })

// cards.forEach((card,i)=>{
//     testiAnim.to(card,{
//         scale:1,
//         duration:.1,
//         ease: "power1",
//         // stagger:0.05,
//     })
// },'simultaneously');


//desktop getApp section animation 
let getAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#getApp',
        start:'top 50%',
        toggleActions: 'play none play reverse'
    }
})

getAnim.to('.red-circle',{
    y:'+=70vh',
    ease:'none'
},'simultaneously')
getAnim.to('.black-circle',{
    y:'+=90vh',
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
getAnim.from('#getApp h4',{
    opacity:0,
    y:500,
    duration:.3,
    ease: "elastic.out(.6,0.4)",
},'<')
getAnim.from('.getApp-wrapper',{
    opacity:0,
    y:500,
    duration:.3,
    ease: "elastic.out(.6,0.4)",
})
//desktop about animation
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
                //*mobile animations*
const heroMages= document.querySelectorAll('.mobile-hero-item img');
if(window.innerWidth<600 && window.innerWidth>320) {
    //hero section animation
    let heroAnim = gsap.timeline({
        scrollTrigger:{
            trigger:heroMages[1],
            start:'30px 50%',
            makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    heroAnim.from(heroMages[1],{
        x:80,
        duration:.5,
        ease:'power1'
    })
    heroAnim.from(heroMages[1].parentNode.parentNode.querySelector('h2'),{
        x:80,
        duration:.5,
        ease:'power1'
    },'<')
    let heroAnim2 =gsap.timeline({
        scrollTrigger:{
            trigger:heroMages[2],
            start:'top 50%',
            makers:true,
            toggleActions: 'play none none reverse'
        }
    })
    heroAnim2.from(heroMages[2],{
        x:-80,
        duration:.5,
        ease:'power1'
    }) 
    heroAnim2.from(heroMages[2].parentNode.parentNode.querySelector('h2'),{
        x:-80,
        duration:.5,
        ease:'power1'
    },'<')
    //section two animation

    let sectionTwoanim = gsap.timeline({
        scrollTrigger:{
            trigger:'#what',
            start:'top 65%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    sectionTwoanim.from('.image-container',{
        y:500,
        duration:.5,
        ease: "elastic.out(.7,0.5)",
    })
    sectionTwoanim.from('#what h2',{
        opacity:0,
        duration:.5,
        ease:'none'
    },'-=.3')
    sectionTwoanim.from('#what p',{
        opacity:0,
        duration:.5,
        ease:'none'
    },'-=.3')
   
    //features animation
    
    let featAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#features',
            start:'top 70%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    featAnim2.from('#features h2',{
        x:-1000,
        duration:.4,
        ease: "elastic.out(.7,0.4)",

    })
    items.forEach((item,i)=>{
        featAnim2.from(item,{
            x:'150%',
            duration:.3,
            ease: "elastic.out(.4,0.3)",
            // stagger:0.05,
        })
    },'simultaneously');
    //howto animation
    let howtoAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#howto',
            start:'top 80%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    howtoAnim2.from('#howto h2',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    howtoAnim2.from('#howto h4',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'-=.1')
    howtoAnim2.from('.howto-img-container',{
        x:1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'-=.3')
    howtoAnim2.from('.howto-write',{
        x:1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'<')
    //faqs animation
    let faqAnim2= gsap.timeline({
        scrollTrigger:{
            trigger:'#faq',
            start:'top center',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    faqAnim2.from('#faq h2',{
        x:-1000,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    faqAnim2.from('.faq-wrapper',{
        x:1000,
        duration:.3,
        ease: "elastic.out(.7,0.4)",
    },'-=.1')
    faqAnim2.from('.faq-img-holder',{
        opacity:0,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    })
    //testimonials animation
    // let testiAnim2 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'#testimonials',
    //         start:'top center',
    //         // makers:true,
    //         toggleActions: 'play none play reverse'
    //     }
    // })
    // testiAnim2.from('.testimonials-wrapper',{
    //     left:1000,
    //     duration:1,
    //     ease: "elastic.out(.7,0.4)",
    // })
    //getApp animation
    let getAnim2 = gsap.timeline({
        scrollTrigger:{
            trigger:'#getApp',
            start:'top 50%',
            // makers:true,
            toggleActions: 'play none play reverse'
        }
    })
    getAnim2.from('#getApp h2',{
        left:-1000,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    })
    getAnim2.from('#getApp h4',{
        left:-1000,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'-=.1')
    getAnim2.from('.getApp-wrapper',{
        y:500,
        opacity:0,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'-=.1')
    getAnim2.from('.download-holder',{
        // y:500,
        opacity:0,
        ease: "elastic.out(.7,0.4)",
        duration:.5,
    },'<')
   
    getAnim2.from('.getApp-bg',{
        width:0,
        height:0,
        duration:.5,
        ease: "elastic.out(.7,0.4)",
    },'-=.5')
   //about animation
   let aboutAnim2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#about',
        start:'30px 50%',
        // end:'bottom 50%',
        // markers:true,
        toggleActions: 'play none play reverse'
    }
})
aboutAnim2.from('#about h2',{
    opacity:0,
    duration:.5,

})
aboutAnim2.to('.about',{
    width:'900px',
    height:'900px',
    background:'#D92728',
    borderRadius:'50% 50% 50% 50%',
    ease: "elastic.out(.7,0.4)",
    duration:1,
    zIndex:'-1'

},'-=.3')
}
