import ReactDOMNodeCache from './ReactDOMNodeCache.js'

export default {
  updateTextContentByID (id, content) {
    const node = ReactDOMNodeCache.getCachedNodeByID(id)
    if (node) node.innerText = content
  }
}
