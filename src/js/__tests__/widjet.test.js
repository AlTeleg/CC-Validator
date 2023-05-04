import { Widjet } from "../widjet";

describe('JSDOM tests', () => {
    test('widjet should render', () => {
        document.body.innerHTML = '<div class="container"></div>';
    
        const container = document.querySelector('.container');
        const widjet = new Widjet(container);
    
        widjet.bindToDOM();

        expect(container.innerHTML).toEqual(`
    <form class="widjet-form">
        <div class="img-container"><img src="" alt="visa"><img src="" alt="mastercard"><img src="" alt="amex"><img src="" alt="discover"><img src="" alt="jcb"><img src="" alt="diners-club"><img src="" alt="unionpay"><img src="" alt="mir"></div>
        <input class="cc-input" id="cc-i" type="text">
        <button type="submit" class="validate-btn">Click to Validate</button>
    </form>
        `);
    })
    
    test('widjet should add valid class', () => {
        document.body.innerHTML = '<div class="container"></div>';
    
        const container = document.querySelector('.container');
        const widjet = new Widjet(container);
    
        widjet.bindToDOM();
    
        widjet.input.value = '6011213810265610960';
        widjet.submit.click();
    
        expect(widjet.input.classList.contains('valid')).toEqual(true);
    })
})