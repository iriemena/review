let review = [
    {
        img: 'fortune.jpg', 
        name: 'Nnaji Sunday', 
        occupation: 'Web Developer', 
        comment: 'This platform is so powerful'
    },

    {
        img: 'michy.jpg', 
        name: 'Chikanyima Michelle', 
        occupation: 'Designer', 
        comment: 'Highly recommended'
    },

    {
        img: 'fortune.jpg', 
        name: 'Sunday', 
        occupation: 'Web Developer', 
        comment: 'Powerful'
    },

    {
        img: 'michy.png', 
        name: 'Chikanyima', 
        occupation: 'Scholar', 
        comment: 'Recommended'
    }

    
]

let img = document.querySelector('.img')
let name = document.querySelector('.name');
let occupation = document.querySelector('.occupation');
let comment = document.querySelector('.comment');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let random = document.querySelector('.random');
let now = document.querySelector('.now')

let current = 0;

window.addEventListener('DOMContentLoaded', function(){
    document.body.style.background = '#1d3226'
    now.innerHTML = 'Welcome to our Review'
    setTimeout(() => document.body.style.background = '', 2000)
    setTimeout(() => now.innerHTML = '', 3000)
    
    content()
    
})


function content(){
    let item = review[current]
    img.src = item.img
    name.textContent = item.name
    occupation.textContent = item.occupation
    comment.textContent = item.comment 
}

prev.addEventListener('click', function(){
    current--
    if(current < 0){
        current = review.length - 1
    }
    content()

})

next.addEventListener('click', function(){
    current++
    if(current > review.length - 1){
        current = 0
    }
    content()
})
random.addEventListener('click', function(){
    current = Math.floor(Math.random() * review.length)
    content()
})
