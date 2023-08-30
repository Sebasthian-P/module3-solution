// ---  NAV_MOBILE  ---

// --  variables
const btnMenu           = document.getElementById('btn__menu')
const btnMenuLineTop    = document.getElementById('line__top')
const btnMenuLineBottom = document.getElementById('line__bottom')
const menuOptions       = document.getElementById('menu__options')
const menuOption        = document.getElementsByClassName('menu__option')


// -- Abrir y cerrar el menu
const openMenu = () => {
    menuOptions.style.marginTop = '10px'
    menuOptions.style.height = '100%'
    btnMenuLineTop.style.transform = 'rotate(40deg)'
    btnMenuLineBottom.style.transform = 'rotate(-40deg)'
    btnMenu.style.gap = '0px'
    btnMenu.onclick = closeMenu
}

const closeMenu = () => {
    menuOptions.style.marginTop = ''
    menuOptions.style.height = '0px'
    btnMenu.style.gap = ''
    btnMenuLineTop.style.transform = ''
    btnMenuLineBottom.style.transform = ''
    btnMenu.onclick = openMenu
}


btnMenu.onclick = openMenu