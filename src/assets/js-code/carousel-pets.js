import { animals } from '../../assets/utils/animals';
import { getTemplate } from "../utils/get-template";
export const animalssList = document.querySelector('.pets__card-list_main');
const animalsTemplateSelector = 'pets-template';
const animalItemSelector = 'pets__card';
export const carouselPets = document.querySelector('.pets__carousel');
export const carouselPetsContent = document.querySelectorAll('.pets__card-list');
const sliderPetsBtn = document.querySelectorAll('.pets__slide-button');
export const petsPrevBtn = document.querySelector('.pets__slide-button_left');
export const petsNextBtn = document.querySelector('.pets__slide-button_right');

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
export function fillContainerWithCards(containerIndex, cardsNum) {
    const animalsArr = getAnimalsArr(cardsNum);
    carouselPetsContent[containerIndex].innerHTML = '';

    animalsArr.forEach(item => {
        const newItem = generateAnimalCard(item);
        carouselPetsContent[containerIndex].append(newItem);
    });
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

// enable transition
export function disableTransition(shift) {
    carouselPets.style.transition = 'none';
    carouselPets.style.marginLeft = `-${shift}%`
};
export function enableTransition(shift) {
    carouselPets.style.transition = 'all 1s ease';
    carouselPets.style.marginLeft = `-${shift}%`;
};