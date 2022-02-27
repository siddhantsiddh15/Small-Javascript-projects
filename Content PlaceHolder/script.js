const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData(){
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1640622332859-55e65253475d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates!'

    profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="">'

    name.innerHTML = 'Melon Husk'

    date.innerHTML = '20 October 2022'

    
    animated_bgs.forEach( (bg) => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach( (bg) => bg.classList.remove('animated-bg-text'))
}



setTimeout(getData, 1100)
