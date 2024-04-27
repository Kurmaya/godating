const pluses = document.querySelectorAll('.question-wrapper'),
see = document.querySelector('.see-more'),
back = document.querySelector('.back');

see.addEventListener('click',()=>{
    back.classList.toggle('hide');
    see.classList.toggle('hide');
    document.querySelector('.faq-2').classList.toggle('active');
    document.querySelector('.faq-1').classList.toggle('active');
})
back.addEventListener('click',()=>{
    back.classList.toggle('hide');
    see.classList.toggle('hide');
    document.querySelector('.faq-2').classList.toggle('active');
    document.querySelector('.faq-1').classList.toggle('active');
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