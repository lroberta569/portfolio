function animationScroll() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1500,
        reset: false
    });

    sr.reveal('.information', { delay: 200 })
    sr.reveal('.about', { delay: 300 })
    sr.reveal('.contact', { delay: 300 })
    sr.reveal('#projetos', { delay: 300 })
    sr.reveal('#servicos', { delay: 300 })
    sr.reveal('#skills', { delay: 300 })

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