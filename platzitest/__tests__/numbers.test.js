import {numbers} from '../numbers';

describe('Numbers', () => {
  test('Debe sumar 2 numeros', () => {
    expect(numbers(4, 6)).toBe(10)
  })

  test('suma mayor a 100', () => {
    expect(numbers(60, 60)).toBeGreaterThan(100)
  })

  test('Debe sumar 2 numeros y resultado mayor o igual', () => {
    expect(numbers(4, 6)).toBeGreaterThanOrEqual(10)
  })

  test('suma menor a 100', () => {
    expect(numbers(39, 60)).toBeLessThan(100)
  })

  test('Debe sumar 2 numeros y resultado menor o igual', () => {
    expect(numbers(3, 6)).toBeLessThanOrEqual(10)
  })

  test('suma mayor a 100', () => {
    expect(numbers(0.3, 0.4)).toBeCloseTo(0.7)
  })
  
  
})
