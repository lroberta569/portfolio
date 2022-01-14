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

const btn = document.querySelector('.mention-button')

btn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

animationScroll()