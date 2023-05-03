import ms from '../img/mastercard.png';
import up from '../img/unionpay.png';
import vs from '../img/visa.png';
import jcb from '../img/jcb.png';
import ax from '../img/amex.png';
import dsr from '../img/discover.png';
import dc from '../img/diners-club.png';
import mir from '../img/mir.png';

export class Widjet {
    constructor(parentEl) {
        this.parenEl = parentEl;
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

    bindToDom() {
        this.parenEl.innerHTML = Widjet.markup;
        const imgContainer = document.querySelector('.img-container');

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

        imgContainer.appendChild(img1);
        imgContainer.appendChild(img2);
        imgContainer.appendChild(img3);
        imgContainer.appendChild(img4);
        imgContainer.appendChild(img5);
        imgContainer.appendChild(img6);
        imgContainer.appendChild(img7);
        imgContainer.appendChild(img8);
    }
}
