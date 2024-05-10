const display = document.querySelector('.sp'),
display2 = document.querySelector('.sp3'),
display3 =document.querySelector('.sp2');
const circles= document.querySelectorAll('.circle');
let counter = {
    value1 :0,
    value2 :0,
    value3 :0,
};
gsap.defaults({
    ease:'power2.in',
    duration:.5,
})
let circ1Anim = gsap.timeline({
    scrollTrigger:{
        trigger:circles[0],
        start:'top 55%',
        toggleActions: 'play none none none'
    }
});
circ1Anim.from('.circle1',{
    left:'-150vw',
})
circ1Anim.from('.circle1 .black-circle1',{
    scale:0,
    rotateY:'360deg',
},'-=.2')
circ1Anim.from('.circle1 .black-circle2',{
    scale:0,
    opacity:0,
    left:'50%',
    onComplete: ()=> {let counterAnim = gsap.timeline();

        counterAnim.to(counter,{
            value1:20,
            value2:82.4,
            value3:293,
            duration:2,
            ease:'power2',
            onUpdate: ()=>{display.innerText = Math.round(counter.value1)+'Million';
                display2.innerText = counter.value2.toFixed(1)+'Million';
                display3.innerText = Math.round(counter.value3)+'%';
            }
        })}
},'<')

 let circ2Anim  = gsap.timeline({
    scrollTrigger:{
        trigger:'.circle2',
        start:'top bottom',
        toggleActions: 'play none none none'
    }
});
circ2Anim.from(circles[1],{
    scale:0,
    ease: "elastic.out(.6,0.4)",
})
circ2Anim.from('.circle2 img',{
    opacity:0,
})
let circ3Anim  = gsap.timeline({
    scrollTrigger:{
        trigger:circles[2],
        start:'top 50%',
        toggleActions: 'play none none none',
    }
});
circ3Anim.from(circles[2],{
    left:'-150vw',
})
circ3Anim.from('.circle3 img',{
    opacity:0,
})

let exciteAnim  = gsap.timeline({
    scrollTrigger:{
        trigger:'.excitement',
        start:'top 80%',
        toggleActions: 'play none none none',
    }
});
exciteAnim.from('.excitement',{
    scale:0,
    ease: "elastic.out(.6,0.4)",
})

let controlAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'.control',
        start:'top 80%',
        toggleActions: 'play none none none',
    }
});
exciteAnim.from('.control',{
    scale:0,
    ease: "elastic.out(.6,0.4)",
})

let ghostAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'.ghost',
        start:'top 60%',
        toggleActions: 'play none none none',
    }
});
ghostAnim.from('.ghost',{
    scale:0,
    left:'-50vw',
    ease: "elastic.out(.6,0.4)",
})
ghostAnim.from('.ghost .black-circle1',{
    scale:0,
    rotateY:'720deg',
},'-=.3')
ghostAnim.from('.real',{
    scale:0,
    left:'50vw',
    ease: "elastic.out(.6,0.4)",
},'-=.1')