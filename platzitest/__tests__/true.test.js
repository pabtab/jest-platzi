import {
  isNull,
  isTrue,
  isFalse,
  isUndefined
} from '../true';

describe("Thruthy", () => {
  test('thruthy function', () => {
    expect(isTrue()).toBeTruthy();
  })
  
  test("true", () => {
    expect(true).toBeTruthy();
  });
  test("{}", () => {
    expect({}).toBeTruthy();
  });
  test("5", () => {
    expect(5).toBeTruthy();
  });
  test("String", () => {
    expect("String").toBeTruthy();
  });
  test("Infinity", () => {
    expect(Infinity).toBeTruthy();
  });
});

describe("Falsy", () => {
  test('function falsy', () => {
    expect(isFalse()).toBeFalsy()
  })
  
  test("False", () => {
    expect(false).toBeFalsy();
  });
  test("Null", () => {
    expect(null).toBeFalsy();
  });
  test("0", () => {
    expect(0).toBeFalsy();
  });
  test("Empty String '' ", () => {
    expect("").toBeFalsy();
  });
  test("NaN", () => {
    expect(NaN).toBeFalsy();
  });
  test("Undefined", () => {
    expect(undefined).toBeFalsy();
  });
});

describe('Undefined function', () => {
  test('should be undefined', () => {
    expect(isUndefined()).toBeUndefined();
  })
  
})

describe('Null function', () => {
  test('should be null', () => {
    expect(isNull()).toBeNull()
  })
  
})
