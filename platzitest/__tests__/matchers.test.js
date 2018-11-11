describe('comparadores', () => {
  const user = {
    user: 'Pablo',
    lastname: 'Tabares'
  }

  const user2 = {
    user: 'Pablo',
    lastname: 'Tabares'
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })

  test('No son iguales', () => {
    expect(user).not.toEqual({user: 'Pablo'})
  })
  
  
})
