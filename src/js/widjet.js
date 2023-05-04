import ms from '../img/mastercard.png';
import up from '../img/unionpay.png';
import vs from '../img/visa.png';
import jcb from '../img/jcb.png';
import ax from '../img/amex.png';
import dsr from '../img/discover.png';
import dc from '../img/diners-club.png';
import mir from '../img/mir.png';
import { Validator } from './validator';

export class Widjet {
    constructor(parentEl) {
        this.parenEl = parentEl;
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    static get markup() {
        return `
    <form class="widjet-form">
        <div class="img-container"></div>
        <input class="cc-input" id="cc-i" type="text">
        <button type="submit" class="validate-btn">Click to Validate</button>
    </form>
        `;
    }

    bindToDOM() {
        this.parenEl.innerHTML = Widjet.markup;
        this.element = document.querySelector('.widjet-form');
        this.input = document.querySelector('.cc-input');
        this.submit = document.querySelector('.validate-btn');
        this.imgContainer = document.querySelector('.img-container');

        const img1 = new Image();
        img1.src = vs;
        img1.alt = 'visa';
        const img2 = new Image();
        img2.src = ms;
        img2.alt = 'mastercard';
        const img3 = new Image();
        img3.src = ax;
        img3.alt = 'amex';
        const img4 = new Image();
        img4.src = dsr;
        img4.alt = 'discover';
        const img5 = new Image();
        img5.src = jcb;
        img5.alt = 'jcb';
        const img6 = new Image();
        img6.src = dc;
        img6.alt = 'diners-club';
        const img7 = new Image();
        img7.src = up;
        img7.alt = 'unionpay';
        const img8 = new Image();
        img8.src = mir;
        img8.alt = 'mir';

        this.imgContainer.appendChild(img1);
        this.imgContainer.appendChild(img2);
        this.imgContainer.appendChild(img3);
        this.imgContainer.appendChild(img4);
        this.imgContainer.appendChild(img5);
        this.imgContainer.appendChild(img6);
        this.imgContainer.appendChild(img7);
        this.imgContainer.appendChild(img8);

        this.element.addEventListener('submit', this.onSubmit);
        this.element.addEventListener('input', this.onInput);
    }

    onSubmit(e) {
        e.preventDefault();
        let validator = new Validator(this.input.value);
        if (!validator.checkLuhn()) {
            console.log(this.element)
            this.element.style.background = 'red';
            this.input.classList.remove('valid');
            this.input.classList.add('invalid');
            setTimeout(() => {
                this.element.style.background = 'white';
            }, 1000);
        } else {
            this.element.style.background = 'lightgreen';
            this.input.classList.remove('invalid');
            this.input.classList.add('valid');
            setTimeout(() => {
                this.element.style.background = 'white';
            }, 1000);
        }
    }

    onInput(e) {
        e.preventDefault();
        let validator = new Validator(this.input.value);
        if (validator.checkPaymentSystem()) {
            Array.from(this.imgContainer.children).forEach(
                (child) => (child.style.opacity = '20%')
            );
            if (validator.checkPaymentSystem() == 'VISA') {
                this.imgContainer.firstChild.style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'MASTERCARD') {
                this.imgContainer.children[1].style.opacity = '100%';
                console.log('Mastercard');
            } else if (validator.checkPaymentSystem() == 'AMEX') {
                this.imgContainer.children[2].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'DISCOVER') {
                this.imgContainer.children[3].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'JCB') {
                this.imgContainer.children[4].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'DINERS') {
                this.imgContainer.children[5].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'UNION_PAY') {
                this.imgContainer.children[6].style.opacity = '100%';
            } else if (validator.checkPaymentSystem() == 'MIR') {
                this.imgContainer.children[7].style.opacity = '100%';
            }
        } else {
            Array.from(this.imgContainer.children).forEach(
                (child) => (child.style.opacity = '100%')
            );
        }
    }
}
