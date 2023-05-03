import { Widjet } from '../js/widjet';
import { Validator } from './validator';
const body = document.body;
const widjet = new Widjet(body);
widjet.bindToDom();

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.cc-input');
    const widjetForm = document.querySelector('.widjet-form');
    const imgContainer = document.querySelector('.img-container');
    widjetForm.addEventListener('input', function (e) {
        e.preventDefault();
        let validator = new Validator(input.value);
        if (validator.checkPaymentSystem()) {
            Array.from(imgContainer.children).forEach(
                (child) => (child.style.opacity = '20%')
            );
            if (validator.checkPaymentSystem() == 'VISA') {
                imgContainer.firstChild.style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'MASTERCARD') {
                imgContainer.children[1].style.opacity = '100%';
                console.log('Mastercard');
            } else if (validator.checkPaymentSystem() == 'AMEX') {
                imgContainer.children[2].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'DISCOVER') {
                imgContainer.children[3].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'JCB') {
                imgContainer.children[4].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'DINERS') {
                imgContainer.children[5].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'UNION_PAY') {
                imgContainer.children[6].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'MIR') {
                imgContainer.children[7].style.opacity = '100%';
            }
        } else {
            Array.from(imgContainer.children).forEach(
                (child) => (child.style.opacity = '100%')
            );
        }
    });
    widjetForm.addEventListener('submit', function (e) {
        const widjetForm = document.querySelector('.widjet-form');
        const input = document.querySelector('.cc-input');
        let validator = new Validator(input.value);
        if (!validator.checkLuhn()) {
            widjetForm.style.background = 'red';
            input.classList.remove('valid');
            input.classList.add('invalid');
            setTimeout(() => {
                widjetForm.style.background = 'white';
            }, 1000);
        } else {
            widjetForm.style.background = 'lightgreen';
            input.classList.remove('invalid');
            input.classList.add('valid');
            setTimeout(() => {
                widjetForm.style.background = 'white';
            }, 1000);
        }
        e.preventDefault();
    });
});
