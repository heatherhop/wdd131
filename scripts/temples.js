const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `©<span>${today.getFullYear()}<span> | Heather Hopkins | Utah, USA`;


const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `<span>Last Modification: ${(document.lastModified)}</span>`

const menuHamb = document.querySelector('#menu')
const nav = document.querySelector('.navigation')

menuHamb.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuHamb.classList.toggle('show');
   
});

