import { JSDOM } from 'jsdom'
import { TEXT_NODE } from 'jsdom/lib/jsdom/living/node-type.js'
import { isBlank, isText, tighten } from '~/src/tighten.js'


beforeAll(() => {
  global.Node = {
    TEXT_NODE
  }
})


describe('isBlank(node)', () => {
  let node, actual

  describe('when node value is blank', () => {
    it('returns true', () => {
      node = JSDOM.fragment('<ul> <li></li></ul>').firstChild.firstChild
      actual = isBlank(node)
      expect(actual).toBe(true)
    })
  })

  describe('when node value is not blank', () => {
    it('returns false', () => {
      node = JSDOM.fragment('<span>One<span>Two</span></span>').firstChild.firstChild
      actual = isBlank(node)
      expect(actual).toBe(false)
    })
  })
})


describe('isText(node)', () => {
  let node, actual

  describe('when node type is text', () => {
    it('returns true', () => {
      node = JSDOM.fragment('<ul> <li></li></ul>').firstChild.firstChild
      actual = isText(node)
      expect(actual).toBe(true)
    })
  })

  describe('when node type is not text', () => {
    it('returns false', () => {
      node = JSDOM.fragment('<ul><li></li></ul>').firstChild.firstChild
      actual = isText(node)
      expect(actual).toBe(false)
    })
  })
})


describe('tighten(element)', () => {
  let input, expected

  const expectTighten = (input, expected) => {
    const el = JSDOM.fragment(input).firstChild
    tighten(el)
    const actual = el.outerHTML
    expect(actual).toBe(expected)
  }

  describe('when element does not have children', () => {
    it('does nothing', () => {
      input = expected = '<div></div>'
      expectTighten(input, expected)
    })
  })

  describe('when element has children', () => {
    it('removes whitespace text nodes', () => {
      input =
`<ul>
  <li></li>
  <li></li>
</ul>`
      expected = '<ul><li></li><li></li></ul>'
      expectTighten(input, expected)
    })
  })
})
