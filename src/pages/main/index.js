import './index.css';
import '../../assets/styles/main.scss';
import { burgerMenuButton, openMenu, burgerMenuClose, closeMenu } from '../../assets/js-code/burger-menu';
import { testimonialsList, createTestimonials, testimonialsScrollbar, handleTestimonialsScrollbar } from '../../assets/js-code/carousel-testimonials';
import { openPopupTestimonial, popupCloseButton, closePopupTestimonial } from '../../assets/js-code/popup-testimonials';
import { carouselPetsItems, disableSliderPetsBtn, enableSliderPetsBtn, petsPrevBtn, petsNextBtn, fillContainerWithCards, createNewSlide, showNewSlide, hideCurrentCard, handlePetsPrevBtn, handlePetsNextBtn } from '../../assets/js-code/carousel-pets';

const smalDesktopWidth = 1340;
const tabletWidth = 980;
let numberOfAnimalCards;
const numberOfAnimalCardsTablet = 4;
const numberOfAnimalCardsDesktop = 6;

function adjustWindowWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= smalDesktopWidth) {
        testimonialsScrollbar.setAttribute('max', 8);
    } else {
        testimonialsScrollbar.setAttribute('max', 7);
    }

    if (windowWidth <= tabletWidth) {
        testimonialsList.addEventListener('click', openPopupTestimonial);
        popupCloseButton.addEventListener('click', closePopupTestimonial);

        numberOfAnimalCards = numberOfAnimalCardsTablet;
    } else {
        testimonialsList.removeEventListener('click', openPopupTestimonial);
        popupCloseButton.removeEventListener('click', closePopupTestimonial);

        numberOfAnimalCards = numberOfAnimalCardsDesktop;
    }
};

function loadContent() {
    adjustWindowWidth();

    carouselPetsItems.forEach((item, index) => {
        fillContainerWithCards(carouselPetsItems[index], numberOfAnimalCards);
    });

    createTestimonials();
};

// // carousel pets
// let currentItem = 0;

// function changeCurrentItem(n) {
//     currentItem = (n + carouselPetsItems.length) % carouselPetsItems.length;
// };

// // carousel pets buttons
// function handlePetsPrevBtn() {
//     disableSliderPetsBtn();
//     hideCurrentCard('to-right', currentItem, numberOfAnimalCards);
//     changeCurrentItem(currentItem - 1);
//     showNewSlide('from-left', currentItem);
// };

// function handlePetsNextBtn() {
//     disableSliderPetsBtn();
//     hideCurrentCard('to-left', currentItem, numberOfAnimalCards);
//     changeCurrentItem(currentItem + 1);
//     showNewSlide('from-right', currentItem);
// };

function handlePetsCarouselPrev() {
    handlePetsPrevBtn(numberOfAnimalCards)
}
function handlePetsCarouselNext() {
    handlePetsNextBtn(numberOfAnimalCards)
}

document.addEventListener('DOMContentLoaded', loadContent);
window.addEventListener('resize', loadContent);
burgerMenuButton.addEventListener('click', openMenu);
burgerMenuClose.addEventListener('click', closeMenu)
petsPrevBtn.addEventListener('click', handlePetsCarouselPrev);
petsNextBtn.addEventListener('click', handlePetsCarouselNext);
testimonialsScrollbar.addEventListener('input', handleTestimonialsScrollbar);

// additional information
const github = 'https://github.com/sergeyladorski';
const dicrord = 'Sergey Ladorski @sergeyladorski';
const greeting = `Hello reviewer! If you have questions about my project, check out my contacts below.`

const helloReviewer = `
__________________
__________________

${greeting}
__________________
__________________

discord: ${dicrord}
__________________

github: ${github}
`;

const task = {
    burgerMenu: {
        title: 'Burger menu',
        value: 10,
    },
    carousel: {
        pets: {
            title: 'Pets carousel',
            value: 30,
        },
        testimonials: {
            title: 'Testimonials carousel',
            value: 20,
        },
    },
    popup: {
        title: 'Testimonials popup',
        value: 10,
    },
    donateAmount: {
        title: 'Donate amount',
        value: 30,
    },
};

const reportTaskCompleted = `
* ${task.burgerMenu.title}: +${task.burgerMenu.value}
* ${task.carousel.pets.title}: +${task.carousel.pets.value}
* ${task.carousel.testimonials.title}: +${task.carousel.testimonials.value}
* ${task.popup.title}: +${task.popup.value}
* ${task.donateAmount.title}: +${task.donateAmount.value}
__________

Total: ${task.burgerMenu.value + task.carousel.pets.value + task.carousel.testimonials.value + task.popup.value + task.donateAmount.value}
`;

console.log(reportTaskCompleted);
console.log(helloReviewer);
