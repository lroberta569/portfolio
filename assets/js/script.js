function animationScroll() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1500,
        reset: false
    });

    sr.reveal('.header', { delay: 150 })
    sr.reveal('.information', { delay: 400 })
    sr.reveal('.about', { delay: 500 })
    sr.reveal('.contact', { delay: 600 })
    sr.reveal('#projetos', { delay: 700 })
    sr.reveal('#servicos', { delay: 500 })
    sr.reveal('#skills', { delay: 900 })

}

function scrollTop() {
    const btn = document.querySelector('.mention-button')

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
}

function activeMenu() {
    const nav = document.querySelector('.nav')

    nav.classList.toggle('active')
}

const btn = document.querySelector('.btn-mobile')

btn.addEventListener("click", activeMenu)
scrollTop()
animationScroll()