const DefaultBlankMatcher = /^\s*$/

function isBlank({ nodeValue }, matcher = DefaultBlankMatcher) {
  return matcher.test(nodeValue)
}

function isText({ nodeType }) {
  return nodeType === Node.TEXT_NODE
}

function tighten({ childElementCount, childNodes }) {
  if (childElementCount > 0) {
    [...childNodes]
      .filter(n => isText(n) && isBlank(n))
      .forEach(n => n.remove())
  }
}

export { tighten }
