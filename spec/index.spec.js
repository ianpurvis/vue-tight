import tight from '~/src/index.js'

describe('tight', () => {
  it('implements bind', () => {
    expect(typeof tight.bind).toBe('function')
  })
  it('implements update', () => {
    expect(typeof tight.update).toBe('function')
  })
})
