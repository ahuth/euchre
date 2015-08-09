import exclaimify from '../src/javascripts/exclaimify'

describe('exclaimify.js', () => {

  it('should make strings exciting!', () => {
    expect(exclaimify('test')).toBe('test!')
  })
})
