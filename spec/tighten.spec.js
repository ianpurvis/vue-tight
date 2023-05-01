import { tighten } from '~/src/tighten.js'

const data = [
  ['children without space', '<i></i><i></i>', '<i></i><i></i>'],
  ['children with space between', '<i></i> <i></i>', '<i></i><i></i>'],
  ['children with space around', ' <i></i><i></i> ', '<i></i><i></i>'],
  ['text without space', 'aeiou', 'aeiou'],
  ['text with space between', 'a e i o u', 'a e i o u'],
  ['text with space around', ' aeiou ', ' aeiou '],
  ['blank text', ' ', ' '],
]

describe('tighten(element)', () => {
  let element

  describe.each(data)('when element contains %s', (name, content, expected) => {
    beforeEach(() => {
      element = document.body
      element.innerHTML = content
    })
    it('removes space between children', () => {
      tighten(element)
      expect(element.innerHTML).toBe(expected)
    })
  })
})
