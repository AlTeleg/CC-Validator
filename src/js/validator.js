export class Validator {
    constructor(number) {
        this.number = number;
    }

    checkLuhn() {
        var s = 0;
        var doubleDigit = false;
        for (var i = this.number.length - 1; i >= 0; i--) {
            var digit = +this.number[i];
            if (doubleDigit) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            s += digit;
            doubleDigit = !doubleDigit;
        }
        return s % 10 == 0;
    }

    checkPaymentSystem() {
        let amex = new RegExp('^3[47][0-9]{13}$');
        let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        let cup1 = new RegExp('^(62[0-9]{14,17})$');
        let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
        let mir = new RegExp('^220(0|4)[0-9]{11}[0-9]*$');
        let mastercard = new RegExp('^5[1-5][0-9]{14}$');
        let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
        let disco = new RegExp(
            '^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}'
        );
        let disco2 = new RegExp(
            '(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$'
        );
        let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
        let jcb = new RegExp('^35[0-9]{14}[0-9]*$');

        if (visa.test(this.number)) {
            return 'VISA';
        }
        if (amex.test(this.number)) {
            return 'AMEX';
        }
        if (mir.test(this.number)) {
            return 'MIR';
        }
        if (mastercard.test(this.number) || mastercard2.test(this.number)) {
            return 'MASTERCARD';
        }
        if (disco.test(this.number) || disco2.test(this.number)) {
            return 'DISCOVER';
        }
        if (diners.test(this.number)) {
            return 'DINERS';
        }
        if (jcb.test(this.number)) {
            return 'JCB';
        }
        if (cup1.test(this.number) || cup2.test(this.number)) {
            return 'UNION_PAY';
        }

        return undefined;
    }
}
