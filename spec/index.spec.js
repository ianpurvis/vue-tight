import vTight from '~/src/index.mjs'

const data = [
  ['children without space', '<i></i><i></i>', '<i></i><i></i>'],
  ['children with space between', '<i></i> <i></i>', '<i></i><i></i>'],
  ['children with space around', ' <i></i><i></i> ', '<i></i><i></i>'],
  ['text without space', 'aeiou', 'aeiou'],
  ['text with space between', 'a e i o u', 'a e i o u'],
  ['text with space around', ' aeiou ', ' aeiou '],
  ['blank text', ' ', ' '],
]

describe('vTight(element)', () => {
  let element

  describe.each(data)('when element contains %s', (name, content, expected) => {
    beforeEach(() => {
      element = document.body
      element.innerHTML = content
    })
    it('removes space between children', () => {
      vTight(element)
      expect(element.innerHTML).toBe(expected)
    })
  })
})
