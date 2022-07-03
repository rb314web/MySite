const nav = document.querySelector('.navbar')
const barsBtn = document.querySelector('.navbar_bars')
const navbarMobile = document.querySelector('.navbar_mobile')
const navbarMobileItem = document.querySelectorAll('.navbar_mobile_item')
const scrollTopBtn = document.querySelector('.scrolltop')


const toggleMenu = () => {
    navbarMobile.classList.toggle('navbar_mobile_active')
}

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
}

const showArrow = () => {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.opacity = '1'
        setTimeout(() => {
            scrollTopBtn.style.display = 'flex'
        },300)
    } else {
        scrollTopBtn.style.opacity = '0'
        setTimeout(() => {
            scrollTopBtn.style.display = 'none'
        },300)
    }

    // if (document.documentElement.scrollTop > 500) {
    //     nav.style.backgroundColor = '#000'
    // }

    document.documentElement.scrollTop > 200 ? nav.style.backgroundColor = '#000' : nav.style.backgroundColor = 'transparent'

}

document.addEventListener('scroll', showArrow)

scrollTopBtn.addEventListener('click', scrollTop)

barsBtn.addEventListener('click', toggleMenu)

navbarMobileItem.forEach(item => {
    item.addEventListener('click', toggleMenu)
});

// document.body.addEventListener('click', () => {
//     navbarMobile.classList.remove('navbar_mobile_active')
// })

AOS.init();