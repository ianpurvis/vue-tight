const DefaultBlankMatcher = /^\s*$/

function isBlank(node, matcher = DefaultBlankMatcher) {
  return matcher.test(node.nodeValue)
}

function isText(node) {
  return node.nodeType === Node.TEXT_NODE
}

function tighten(el) {
  Array.from(el.childNodes)
    .filter(node => isText(node) && isBlank(node))
    .forEach(node => el.removeChild(node))
}

export { tighten }
