import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('restar', () => {
      expect(restar(10, 5)).toBe(5)
    })
    test('Dividir', () => {
      expect(dividir(20, 2)).toBe(10)
    })
    
    
});