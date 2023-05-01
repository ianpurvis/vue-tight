const DefaultBlankMatcher = /^\s*$/

function isBlank(node, matcher = DefaultBlankMatcher) {
  return matcher.test(node.nodeValue)
}

function isText(node) {
  return node.nodeType === Node.TEXT_NODE
}

function tighten({ childElementCount, childNodes }) {
  if (childElementCount > 0) {
    [...childNodes]
      .filter(n => isText(n) && isBlank(n))
      .forEach(n => n.remove())
  }
}

export { tighten }
