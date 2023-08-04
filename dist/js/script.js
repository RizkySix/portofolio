//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop
    const toTop = document.querySelector('#to-top');
    if(scrollTopValue === 0) {
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }else{
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }
   
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
    
})

// klik outside hamburger
window.addEventListener('click' , function(e){
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

//Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
const icon = document.querySelector('.icon-toggle')

darkToggle.addEventListener('click' , function(){
    if( darkToggle.checked ){
        html.classList.add('dark')
        localStorage.theme = 'dark'
        icon.innerHTML = '&#127770;'
    }else{
        html.classList.remove('dark') 
        localStorage.theme = 'light'
        icon.innerHTML = '&#9728;'

    }
  
})


//automaticaly toggle for mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
    icon.innerHTML = '&#127770;'
  } else {
    darkToggle.checked = false
    icon.innerHTML = '&#9728;'
  }

  