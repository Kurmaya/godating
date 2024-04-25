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
        let wr = document.querySelectorAll('.question-wrapper');
        // wr.forEach(w=>{
        //     w.classList.toggle('active');
        // })
    })
})
// for(let i=0;i<pluses.length;i++){
//     pluses[i].addEventListener('click',function(){
//         pluses[i].querySelector('.plus1').classList.toggle('active');
//         pluses[i].querySelector('.answer').classList.toggle('active');
//         pluses[i].querySelector('.question').classList.toggle('active');
//     })


// }