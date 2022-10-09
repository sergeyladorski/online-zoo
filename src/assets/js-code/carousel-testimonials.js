import { getTemplate } from "../utils/get-template";
import { testimonials } from '../../assets/utils/testimonials';
export const testimonialsScrollbar = document.querySelector('.testimonials__scrollbar');
export const testimonialsList = document.querySelector('.testimonials__list');
const testimonialsTemplateSelector = 'testimonials-template';
const testimonialItemSelector = 'testimonials__item';

export function handleTestimonialsScrollbar() {
    let styleList = getComputedStyle(testimonialsList);
    const item = document.querySelector('.testimonials__item');
    let styleItem = getComputedStyle(item);
    const newValue = testimonialsScrollbar.value;

    const translation = newValue * (parseInt(styleList.gap) + parseInt(styleItem.width));
    testimonialsList.style.transform = `translateX(-${translation}px)`
}

export function generateItem(item) {

    const element = getTemplate(testimonialsTemplateSelector, testimonialItemSelector);

    const name = element.querySelector('.testimonials__user-name');
    name.textContent = item.name;

    const avatar = element.querySelector('.testimonials__user-icon');
    avatar.src = item.avatar;

    const location = element.querySelector('.testimonials__user-location');
    location.textContent = item.local;

    const date = element.querySelector('.testimonials__item-date');
    date.textContent = item.date;

    const text = element.querySelector('.testimonials__item-text');
    text.textContent = item.text;

    return element;
};

export function createTestimonials() {
    testimonials.forEach(item => {
        const newItem = generateItem(item);
        testimonialsList.append(newItem);
    });
};
