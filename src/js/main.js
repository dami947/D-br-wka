const navBtn = document.querySelector('.btn-bars');
const navMobile = document.querySelector('.nav-mobile__menu');
const navAllLink = document.querySelectorAll('.menu-link');
const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');
const footerYear = document.querySelector('.footer-year');
const btnMenu = document.querySelectorAll('.btn-see-menu');
const popupPackages = document.querySelector('.popup-packages');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('.textarea');
const btnForm = document.querySelector('.btn-form');


const handleNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('active-menu')
}

navAllLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('sticky-body')
        navMobile.classList.remove('active-menu')
    })
})

function openAccordionitems() {

    if (this.nextElementSibling.classList.contains('active-accordion')) {
        this.nextElementSibling.classList.remove('active-accordion');
        accordionBtns.forEach(item => item.classList.remove('active-icon'));
    } else {
        closeAccordionItem();
        this.nextElementSibling.classList.toggle('active-accordion');
        this.classList.toggle('active-icon');

    }
}

const closeAccordionItem = () => {
    const allActiveItems = document.querySelectorAll('.accordion-body');
    allActiveItems.forEach(item => item.classList.remove('active-accordion'));
    accordionBtns.forEach(item => item.classList.remove('active-icon'));
}

const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion-btn') ||
        e.target.classList.contains('accordion-body')
    ) {
        return
    }

    closeAccordionItem();
}



const showPopup = e => {
    popupPackages.classList.remove('hidden')
    document.body.classList.add('sticky-body')
}


const closePopup = () => {
    popupPackages.classList.add('hidden')
    document.body.classList.remove('sticky-body')
}

btnMenu.forEach(btn => {
    btn.addEventListener('click', showPopup)
})
popupPackages.addEventListener("click", e => {
    if (e.target === popupPackages || document.querySelector('.popup-packages-menu')) {
        closePopup();
    }
});

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();


navBtn.addEventListener('click', handleNav);
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionitems));
window.addEventListener('click', clickOutsideAccordion);