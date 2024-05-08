const display = document.querySelector('.sp'),
display2 = document.querySelector('.sp2'),
display3 =document.querySelector('.sp3');

let counter = {
    value :0
};

gsap.to(counter ,{
    value:20,
    duration:2,
    ease:'power1',
    onUpdate: () => display.innerText= Math.round(counter.value)+'Million',
    onComplete: ()=>{
        counter.value=62;
        gsap.to(counter,{
            value:82.4,
            onUpdate: () => display2.innerText = counter.value.toFixed(1)+'Million',
            duration:2,
            ease:'power2',
            onComplete:()=>{
                counter.value= 100;
                gsap.to(counter,{
                    value:293,
                    duration:2,
                    ease:'power2',
                    onUpdate:()=>
                        display3.innerText = Math.round(counter.value)+'%',
                        
                    
                })
            }

        })
    }
    
})

