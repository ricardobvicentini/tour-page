const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

hiddenElements.forEach(hidden => {
    observer.observe(hidden)
}, {
    rootMargin: "-500px 0px"
})


const rightElements = document.querySelectorAll('.rightHid');

const watcher = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("hide", entry.isIntersecting)
    })
})

rightElements.forEach(rightHid => {
    watcher.observe(rightHid)
}, {
    rootMargin: "-500px 0px"
})

// Faders

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("appear", entry.isIntersecting)
    })
}, {
    rootMargin: "0px 0px -220px 0px"
})

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

// Popers

const popers = document.querySelectorAll('.pop-in');

const appearOnShow = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("pop", entry.isIntersecting)
    })
})

popers.forEach(poper => {
    appearOnShow.observe(poper)
})

// Outers

const outers = document.querySelectorAll('.fade-out');

const disappearOnShow = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("disappear", entry.isIntersecting)
    })
})

outers.forEach(outer => {
    disappearOnShow.observe(outer)
})
