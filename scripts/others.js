const pluses = document.querySelectorAll('.question-wrapper');
const drop = document.querySelector('.dots');
const close = document.querySelector('.close');
see = document.querySelector('.see-more'),
back = document.querySelector('.back');
drop.addEventListener('click',function(){
    document.querySelector('.nav-drop').classList.add('active');
    drop.style.display='none';
    document.body.style.overflow='hidden';
    close.classList.add('active');
})
close.addEventListener('click',function(){
    document.querySelector('.nav-drop').classList.remove('active');
    drop.style.display='block';
    close.classList.remove('active');
    document.body.style.overflowY='auto';
    document.body.style.overflowX='hidden';
})

let count =0;
see.addEventListener('click',()=>{
    count++;
    
    if(count == 1){
        
        back.classList.remove('hide');

        document.querySelector('.faq-1').classList.add('active');
        document.querySelector('.faq-2').classList.add('active');
        document.querySelector('.faq-3').classList.remove('active');
    }
    else if(count == 2){
        // back.classList.remove('hide');
        // see.classList.add('hide');
        // see2.classList.remove('hide');
        document.querySelector('.faq-2').classList.remove('active');
        document.querySelector('.faq-3').classList.add('active');
    }
     else if(count == 3){
        
        
        document.querySelector('.faq-3').classList.remove('active');
        document.querySelector('.faq-4').classList.add('active');
    }
    else if(count == 4){
        see.classList.add('hide');
        document.querySelector('.faq-4').classList.remove('active');
        document.querySelector('.faq-5').classList.add('active');
    }
    
})

back.addEventListener('click',()=>{
    count--;
    if(count == 3){
        see.classList.remove('hide');
        document.querySelector('.faq-5').classList.remove('active');
        document.querySelector('.faq-4').classList.add('active');
    }
   else if(count == 2){
        document.querySelector('.faq-3').classList.add('active');
        document.querySelector('.faq-4').classList.remove('active');
    }
    else if(count == 1){
        document.querySelector('.faq-1').classList.add('active');
        document.querySelector('.faq-2').classList.add('active');
        document.querySelector('.faq-3').classList.remove('active');
    }
    else if(count == 0 ){
        see.classList.remove('hide');
        document.querySelector('.faq-1').classList.remove('active');
        document.querySelector('.faq-2').classList.remove('active');
        back.classList.toggle('hide');
    }
    
    
    
})

pluses.forEach(plus=>{
    plus.addEventListener('click',(e)=>{

    if (plus.querySelector('.question').classList.length === 1){
        pluses.forEach(p=>{
           
            
            p.querySelector('.plus1').classList.remove('active');
            p.querySelector('.answer').classList.remove('active');
            p.querySelector('.question').classList.remove('active');
        });
        plus.querySelector('.plus1').classList.add('active');
        plus.querySelector('.answer').classList.toggle('active');
        plus.querySelector('.question').classList.toggle('active');
       
    }

    else if(plus.querySelector('.question').classList.length === 2){
    
        pluses.forEach(p=>{
           
            // p.classList.remove('active');
            p.querySelector('.plus1').classList.remove('active');
            p.querySelector('.answer').classList.remove('active');
            p.querySelector('.question').classList.remove('active');
        });

    }
     
       
    })
})


//scroll snap 
// window.addEventListener('wheel', function(event)
// {
//  if (event.deltaY < 0)
//  {
//   console.log('scrolling up');
//   window.scrollBy(0,-window.innerHeight);
//  }
//  else if (event.deltaY > 0)
//  {
//   console.log('scrolling down');
//   window.scrollBy(0,window.innerHeight);
//  }
// });
const scrolls = document.querySelectorAll('.scroll');

const scrollAmt = window.innerHeight+window.innerHeight/10;
    scrolls[0].addEventListener('click',()=>{
        
        window.scrollBy(0,scrollAmt);
    })

for(let i=1;i<scrolls.length;i++){
    scrolls[i].addEventListener('click',()=>{
        window.scrollBy(0,window.innerHeight);
    })
}

scrolls.forEach(scroll=>{
    scroll.addEventListener('mouseover',()=>{
        scroll.querySelector('img').classList.add('active');
    })
    scroll.addEventListener('mouseleave',()=>{
        scroll.querySelector('img').classList.remove('active');
    })
})


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

