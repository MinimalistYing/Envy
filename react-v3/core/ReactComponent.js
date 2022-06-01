import DOMIDOperations from './ReactDOMIDOperations.js'

class ReactComponent {

  static DOMIDOperations = DOMIDOperations

  static ComponentLifeCycle = {
    MOUNTED: 'MOUNTED',
    UNMOUNTED: 'UNMOUNTED'
  }

  constructor(initialProps, children) {
    this.props = initialProps || {}

    if (typeof children !== 'undefined') {
      this.props.children = children
    }

    this._lifeCycleState = ReactComponent.ComponentLifeCycle.UNMOUNTED
  }

  setProps(partialProps) {
    this.replaceProps({ ...this.props, ...partialProps })
  }

  replaceProps(props) {
    this.receiveProps(props)
  }

  receiveProps(nextProps, transaction) {

  }

  mountComponentIntoNode(rootID, container) {
    this._mountComponentIntoNode(rootID, container)
  }

  _mountComponentIntoNode(rootID, container, transaction) {
    const html = this.mountComponent(rootID, transaction)

    console.log(html)

    // Asynchronously inject markup by ensuring that the container is not in
    // the document when settings its `innerHTML`.
    const parent = container.parentNode
    if (parent) {
      const next = container.nextSibling
      parent.removeChild(container)
      container.innerHTML = html
      if (next) {
        parent.insertBefore(container, next)
      } else {
        parent.appendChild(container)
      }
    } else {
      container.innerHTML = html
    }
  }

  mountComponent(rootID, transaction) {
    if (this._lifeCycleState !== ReactComponent.ComponentLifeCycle.UNMOUNTED) return

    this._rootNodeID = rootID
    this._lifeCycleState = ReactComponent.ComponentLifeCycle.MOUNTED
  }
}

export default ReactComponent
