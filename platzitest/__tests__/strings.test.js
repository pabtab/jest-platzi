describe('Comprobar cadenas de texto', () => {
  const text = 'Un bonito texto';

  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/);
  })

  test('No contiene la palabra es', () => {
    expect(text).not.toMatch(/es/)
  })
  
  test('Comprobar tamaño de texto', () => {
    expect(text).toHaveLength(15)
  })
  
  
})
