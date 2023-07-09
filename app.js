/* const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
 */



const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    rootMargin: "-200px 0px -200px 0px"
})

hiddenElements.forEach(hidden => {
    observer.observe(hidden)
})

const faders = document.querySelectorAll('.fade-in');


const appearOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("appear", entry.isIntersecting)
    })
}, {
    rootMargin: "0px 0px -300px 0px"
})

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

