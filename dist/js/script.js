//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTopValue === 0) {
        header.classList.remove('navbar-fixed')
    }else{
        header.classList.add('navbar-fixed')
    }
   
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
    
})