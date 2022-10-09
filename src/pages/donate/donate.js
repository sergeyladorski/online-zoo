import './donate.css';
import '../../assets/styles/donate.scss';
import { burgerMenuButton, openMenu, burgerMenuClose, closeMenu } from '../../assets/js-code/burger-menu';

const donateBar = document.querySelector('.donate__bar');
const donateBarOptionList = document.querySelectorAll('.donate__bar-option');
const donateBarOptionArray = Array.from(donateBarOptionList);
const defaultOption = '100';
const inputRangeAmount = document.querySelector('.donate__bar-input');
const inputOptionSelector = 'donate__bar-option';
// const inputOption = document.querySelector('.donate__bar-option');
const customAmountInput = document.querySelector('.donate__amount-custom-input');
const donateForm = document.querySelector('.donate__form');

function getDefaultAmountStyle() {
    donateBarOptionArray.forEach((option) => {
        if (option.getAttribute('data-amount') === defaultOption) {
            option.classList.add('donate__bar-option_active')
        } else {
            option.classList.remove('donate__bar-option_active')
        }
    })
}
function adjustDonateBarOptions() {
    customAmountInput.value = defaultOption;
    getDefaultAmountStyle();

    let i = 0;

    donateBarOptionArray.forEach((option) => {
        option.setAttribute('value', i);
        i++;
    })
};

function handleInputAmoutChange(evt) {
    if (evt.target.classList.contains(inputOptionSelector)) {
        inputRangeAmount.setAttribute('value', evt.target.value);
        customAmountInput.value = evt.target.getAttribute('data-amount');

        donateBarOptionArray.forEach((option) => {
            if (option.getAttribute('value') === evt.target.value) {
                option.classList.add('donate__bar-option_active');
            } else {
                option.classList.remove('donate__bar-option_active');
            }
        })
    }
};

function handleCustomAmountChange() {
    donateBarOptionArray.forEach((option) => {
        if (option.getAttribute('data-amount') === customAmountInput.value) {
            option.classList.add('donate__bar-option_active');
            inputRangeAmount.setAttribute('value', option.value);
        } else {
            option.classList.remove('donate__bar-option_active');
        }
    })
};

function handleDonateFormSubmit(evt) {
    evt.preventDefault();
}

burgerMenuButton.addEventListener('click', openMenu);
burgerMenuClose.addEventListener('click', closeMenu)
document.addEventListener('DOMContentLoaded', adjustDonateBarOptions);
donateBar.addEventListener('click', handleInputAmoutChange)
customAmountInput.addEventListener('input', handleCustomAmountChange);
donateForm.addEventListener('submit', handleDonateFormSubmit);