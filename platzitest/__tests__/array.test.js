import {
  arrayFruits,
  arrayColors
} from '../array';

describe('Comprobamos que existe un elemento', () => {
  test('Contiene una banana', () => {
    expect(arrayFruits()).toContain('banana')
  })

  test('Tamaño de arreglo', () => {
    expect(arrayFruits()).toHaveLength(7)
  })
  
  test('Existe un color', () => {
    expect(arrayColors()).toContain('blue')
  })
  
  
})
