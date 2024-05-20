const root = document.querySelector('#root');
const toggler = document.querySelector('#toggler');
const links = root.querySelectorAll('a');

toggler.addEventListener('click', () => {
    root.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        root.classList.remove('open');
    });
});