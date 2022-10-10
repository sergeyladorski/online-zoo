import { animals } from '../../assets/utils/animals';
import { getTemplate } from "../utils/get-template";
export const animalssList = document.querySelector('.pets__card-list');
const animalsTemplateSelector = 'pets-template';
const animalItemSelector = 'pets__card';
export const carouselPets = document.querySelector('.pets__carousel');
export const carouselPetsItems = document.querySelectorAll('.pets__card-list');
const sliderPetsBtn = document.querySelectorAll('.pets__slide-button');
export const petsPrevBtn = document.querySelector('.pets__slide-button_left');
export const petsNextBtn = document.querySelector('.pets__slide-button_right');
let currentItem = 0;

export function generateAnimalCard(item) {
    const element = getTemplate(animalsTemplateSelector, animalItemSelector);

    const species = element.querySelector('.pets__card-title');
    species.textContent = item.species;

    const image = element.querySelector('.pets__image');
    image.src = item.image;

    const native = element.querySelector('.pets__card-desc');
    native.textContent = `Native to ${item.native}`;

    const type = element.querySelector('.type');
    type.classList.add(item.type);

    return element;
};

export function getAnimalsArr(n) {
    return animals
        .map(item => ({ item, index: Math.random() }))
        .sort((a, b) => a.index - b.index)
        .map(a => a.item)
        .slice(0, n);
};

// create new items
export function fillContainerWithCards(container, cardsNum) {
    const animalsArr = getAnimalsArr(cardsNum);
    container.innerHTML = '';

    animalsArr.forEach(item => {
        const newItem = generateAnimalCard(item);
        container.append(newItem);
    });
};

export function createNewSlide(cardsNum) {
    carouselPetsItems.forEach((item, index) => {
        if (!item.classList.contains('active')) {
            fillContainerWithCards(carouselPetsItems[index], cardsNum);
        }
    })
};

// slider buttons on/off
export function disableSliderPetsBtn() {
    sliderPetsBtn.forEach(item => {
        item.setAttribute('disabled', true);
    })
};

export function enableSliderPetsBtn() {
    sliderPetsBtn.forEach(item => {
        item.removeAttribute('disabled');
    })
};

export function hideCurrentCard(direction, cardsNum) {
    let animationType;

    if (direction === 'to-right') {
        animationType = 'animate-first';
    } else {
        animationType = 'animate-second';
    }

    const activeEl = document.querySelector('.active');
    activeEl.classList.add(animationType);

    carouselPetsItems[currentItem].classList.add(direction);

    createNewSlide(cardsNum);

    carouselPetsItems[currentItem].addEventListener('animationend', function () {
        activeEl.classList.add('animate-first');
        this.classList.remove('active', direction, animationType);
        enableSliderPetsBtn();
    });
};

export function showNewSlide(direction) {
    carouselPetsItems[currentItem].classList.add('next', direction);
    let animationType;

    if (direction === 'from-left') {
        animationType = 'animate-second';
    } else {
        animationType = 'animate-first';
    }

    const nextEl = document.querySelector('.next');
    nextEl.classList.add(animationType);


    carouselPetsItems[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction, animationType);
        this.classList.add('active');
        enableSliderPetsBtn();
    });
};


function changeCurrentItem(n) {
    currentItem = (n + carouselPetsItems.length) % carouselPetsItems.length;
};

// carousel pets buttons
export function handlePetsPrevBtn(numberOfAnimalCards) {
    disableSliderPetsBtn();
    hideCurrentCard('to-right', numberOfAnimalCards);
    changeCurrentItem(currentItem - 1);
    showNewSlide('from-left');
};

export function handlePetsNextBtn(numberOfAnimalCards) {
    disableSliderPetsBtn();
    hideCurrentCard('to-left', numberOfAnimalCards);
    changeCurrentItem(currentItem + 1);
    showNewSlide('from-right');
};