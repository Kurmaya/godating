const pluses = document.querySelectorAll('.question-wrapper'),
see = document.querySelector('.see-more'),
back = document.querySelector('.back');
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
        
        plus.querySelector('.plus1').classList.toggle('active');
        plus.querySelector('.answer').classList.toggle('active');
        plus.querySelector('.question').classList.toggle('active');
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