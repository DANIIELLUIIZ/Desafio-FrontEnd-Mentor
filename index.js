const btnMenu = document.getElementById('btn-menu')
const btnCloseMenu = document.getElementById('close-menu')
const mobileMenu = document.getElementById('mobile-menu')
const curtain = document.getElementById('curtain')

const asideMenu = document.getElementById('aside')
const cards = document.getElementById('cards')

btnMenu.addEventListener('click', () => {
  mobileMenu.classList.add('show-menu')
  curtain.classList.add('curtain-down')
  asideMenu.classList.add('hide')
  cards.classList.add("hide")
})
btnCloseMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show-menu')
  curtain.classList.remove('curtain-down')
  asideMenu.classList.remove('hide')
  cards.classList.remove("hide")
})
