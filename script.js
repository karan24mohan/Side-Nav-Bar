const openNav = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');
const navActive = document.querySelectorAll('.navbar');

openNav.addEventListener('click', () => {
    navActive.forEach(item => { item.classList.add('active'); })
});

closeNav.addEventListener('click', () => {
    navActive.forEach(elem => elem.classList.remove('active'));
})