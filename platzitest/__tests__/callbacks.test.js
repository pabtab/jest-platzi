import { callbackHell } from '../callbacks';

describe('Probando callbacks', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hola Pablo')
      done();
    }
    callbackHell(otherCallback)
  })
  
})
