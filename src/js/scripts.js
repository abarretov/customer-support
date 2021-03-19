const BODY = document.querySelector('body')
const MENU_BTN = document.querySelector('#menuBtn')
const MENU_NAV = document.querySelector('#menuNav')
const CTA = document.querySelector('.cta')

/* Show and hide the menu on mobile
************************************/
MENU_BTN.addEventListener('click', () => {
  MENU_BTN.classList.toggle('menu__btn--active')
  MENU_NAV.classList.toggle('menu__nav--expanded')
  BODY.classList.toggle('freeze')
})

/* Show CTA on mobile
**********************/
window.addEventListener("scroll", function() {
  let viewportWidth = window.innerWidth
  if (viewportWidth <= 414) {
    let windowScroll = window.scrollY
    if (windowScroll >= 100) {
      CTA.classList.add('cta--show')
    }
    else {
      CTA.classList.remove('cta--show')
    }
  }
})

// var acc = document.getElementsByClassName('accordion')
// var i
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function() {
//     this.classList.toggle('active')
//     var panel = this.nextElementSibling
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px"
//     } 
//   })
// }