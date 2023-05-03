import { Validator } from '../validator';

describe('validator functions test', () => {
    test('checkLuhn test validation passed', () => {
        const validator = new Validator('6011213810265610960');
        expect(validator.checkLuhn()).toBe(true);
    });
    test('checkLuhn test validation failed', () => {
        const validator = new Validator('6011213810265610969');
        expect(validator.checkLuhn()).toBe(false);
    });

    test('checkPaymentSystem test validation Discover', () => {
        const validator = new Validator('6452967842948005049');
        expect(validator.checkPaymentSystem()).toBe('DISCOVER');
    });
    test('checkPaymentSystem test validation Visa', () => {
        const validator = new Validator('4929223559335102');
        expect(validator.checkPaymentSystem()).toBe('VISA');
    });
    test('checkPaymentSystem test validation AMEX', () => {
        const validator = new Validator('371065541782961');
        expect(validator.checkPaymentSystem()).toBe('AMEX');
    });
    test('checkPaymentSystem test validation Mastercard', () => {
        const validator = new Validator('5418231506581384');
        expect(validator.checkPaymentSystem()).toBe('MASTERCARD');
    });
    test('checkPaymentSystem test validation Union Pay', () => {
        const validator = new Validator('6262320002000067');
        expect(validator.checkPaymentSystem()).toBe('UNION_PAY');
    });
    test('checkPaymentSystem test validation Diners Club', () => {
        const validator = new Validator('30265493048576');
        expect(validator.checkPaymentSystem()).toBe('DINERS');
    });
    test('checkPaymentSystem test validation Mir', () => {
        const validator = new Validator('2200000000000053');
        expect(validator.checkPaymentSystem()).toBe('MIR');
    });
    test('checkPaymentSystem test validation JCB', () => {
        const validator = new Validator('3543522443071759');
        expect(validator.checkPaymentSystem()).toBe('JCB');
    });
});
