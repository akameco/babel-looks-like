const m = require('.')

test('valid object', () => {
  const expectd = { a: 1, b: { c: 2 } }
  const actual = { a: 1, b: { c: 2 } }
  expect(m(expectd, actual)).toBe(true)
})

test('valid object with func', () => {
  const expectd = { a: 1, b: { c: 2 } }
  const actual = { a: 1, b: { c: x => x === 2 } }
  expect(m(expectd, actual)).toBe(true)
})

test('invalid object', () => {
  const expectd = { a: 1, b: { c: 2 } }
  const actual = { a: 1, b: { c: 3 } }
  expect(m(expectd, actual)).toBe(false)
})

test('invalid object with func', () => {
  const expectd = { a: 1, b: { c: 2 } }
  const actual = { a: 1, b: { c: x => x !== 2 } }
  expect(m(expectd, actual)).toBe(false)
})
