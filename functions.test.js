const capitalize = require('./capitalize');
const reverseString = require('./reversedString');
const Calculator = require('./calculatorObj');
const analyzeArray = require('./arrayAnalyzer');
it('Capitalizer', ()=>{
    expect(capitalize('moamen')).toBe('Moamen');
});

it('reverseString', ()=>{
    expect(reverseString('moamen')).toBe('nemaom');
})

it('add',()=>{
    expect(Calculator.add(2,2)).toBe(4);
});

it('sub',()=>{
    expect(Calculator.subract(2,2)).toBe(0);
});

it('div',()=>{
    expect(Calculator.divide(2,2)).toBe(1);
});

it('mul',()=>{
    expect(Calculator.multiply(2,2)).toBe(4);
});

it('ArrAnalyzer',()=>{
    expect(analyzeArray([1,2,5,9,-96])).toEqual({ average: -15.8, min: -96, max: 9, length: 5 });
})