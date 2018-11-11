//despues de cada prueba

afterEach(() => console.log('despues de cada prueba'))
afterAll(() => console.log('Despues de todas las pruebas'))

// Antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'))
beforeEach(() => console.log('Antes de cada prueba'))

describe('Prepara antes de ejecutar', () => {
  test('Es verdadero', () => {
    expect(true).toBeTruthy()
  })
  
})
