const testimonialsPopup = document.querySelector('.testimonials__popup');
const popupUserName = testimonialsPopup.querySelector('.testimonials__user-name');
const popupImage = testimonialsPopup.querySelector('.testimonials__user-icon');
const popupLocation = testimonialsPopup.querySelector('.testimonials__user-location');
const popupDate = testimonialsPopup.querySelector('.testimonials__item-date');
const popupText = testimonialsPopup.querySelector('.testimonials__item-text');
export const popupCloseButton = testimonialsPopup.querySelector('.testimonials__popup-close-button');

const testimonialsItem = '.testimonials__item';
const testimonialsItemName = '.testimonials__user-name';
const testimonialsItemImage = '.testimonials__user-icon';
const testimonialsItemLocal = '.testimonials__user-location';
const testimonialsItemDate = '.testimonials__item-date';
const testimonialsItemText = '.testimonials__item-text';



function setPopupContent(evt) {
    const currentItem = evt.target.closest(testimonialsItem)

    const name = currentItem.querySelector(testimonialsItemName)
    const image = currentItem.querySelector(testimonialsItemImage)
    const local = currentItem.querySelector(testimonialsItemLocal)
    const date = currentItem.querySelector(testimonialsItemDate)
    const text = currentItem.querySelector(testimonialsItemText)

    popupUserName.textContent = name.textContent;
    popupImage.setAttribute('src', image.getAttribute('src'));
    popupLocation.textContent = local.textContent;
    popupDate.textContent = date.textContent;
    popupText.textContent = text.textContent;
}

export function openPopupTestimonial(evt) {
    testimonialsPopup.classList.add('testimonials__popup_active');
    setPopupContent(evt);

    document.addEventListener('mousedown', handleOverlay);
    document.addEventListener("keydown", closePopupTestimonial);
};

function handleOverlay(evt) {
    if (evt.target.classList.contains('testimonials__popup_active')) {
        closePopupTestimonial();
    }
};

function closePopupByEsc(evt) {
    if (evt.key === "Escape") {
        closePopupTestimonial();
    }
};

export function closePopupTestimonial() {
    testimonialsPopup.classList.remove('testimonials__popup_active');
    document.removeEventListener('mousedown', handleOverlay);
    document.removeEventListener("keydown", closePopupByEsc);
};
