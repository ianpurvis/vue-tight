const blankMatcher = /^\s*$/

function isWhitespace(node) {
  return node.nodeType === Node.TEXT_NODE
    && blankMatcher.test(node.nodeValue)
}

function tighten(el) {
  for (const node of el.childNodes) {
    if (isWhitespace(node)) {
      el.removeChild(node)
    }
  }
}

export {
  isWhitespace,
  tighten
}
