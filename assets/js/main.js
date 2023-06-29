const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// show menu
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// hidden menu
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper
const popularSwiper = new Swiper('.popular__content', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    // when window width is >= 768px
    768:{
      centeredSlides: false
    }
  }
});

// about
const faqItems = document.querySelectorAll('.about__faq-item')

faqItems.forEach(item => {
  const faqHeader = item.querySelector('.about__faq-header')

  faqHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.faq-open')
    toggleItem(item)
    if(openItem && openItem !== item){
      toggleItem(openItem)
    }
  })
  
})

const toggleItem = item => {
  const faqContent = item.querySelector('.about__faq-content')
  if(item.classList.contains('faq-open')){
    faqContent.removeAttribute('style')
    item.classList.remove('faq-open')
  }else{
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open')
  }

}

//scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll') : scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//active link 스크롤 내릴때 메뉴 색 바뀌게
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// dark light theme
const themeBtn = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeBtn.classList.toggle(iconTheme)

  localStorage.setItem('selcted-theme', getCurrentTheme())
  localStorage.setItem('selcted-icon', getCurrentIcon())
})


// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__content, .popular__container, .products__container,.join__bg,.footer__container`)
sr.reveal(`.home__image`, {origin:'bottom'})
sr.reveal(`.about__image, .features__image`, {origin:'left'})
sr.reveal(`.about__content, .features__content`, {origin:'right'})
