import CSSPropertyOperations from '../domUtils/CSSPropertyOperations.js'
import DOMPropertyOperations from '../domUtils/DOMPropertyOperations.js'
import ReactComponent from './ReactComponent.js'


class ReactNativeComponent extends ReactComponent {
  constructor(props, children, tag, omitClose) {
    super(props, children)

    this._tagOpen = `<${tag} `
    this._tagClose = omitClose ? '' : `</${tag}>`
    this.tagName = tag.toUpperCase()
  }

  mountComponent(rootID, transaction) {
    super.mountComponent(rootID, transaction)

    return (
      this._createOpenTagMarkup() +
      this._createContentMarkup(transaction) +
      this._tagClose
    )
  }

  receiveProps(nextProps, transaction) {
    super.receiveProps(nextProps, transaction)

    this._updateDOMProperties(nextProps)
    this._updateDOMChildren(nextProps, transaction)
    this.props = nextProps
  }

  _createOpenTagMarkup() {
    let html = this._tagOpen

    for (let [propKey, propValue] of Object.entries(this.props)) {
      if (propValue == null || propKey === 'children') {
        continue
      }

      // 简要处理，on 开头的属性当作事件
      if (propKey.startsWith('on')) {

      } else {
        if (propKey === 'style') { // 样式
          propValue = CSSPropertyOperations.createMarkupForStyles(propValue)
        }

        const markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue)
        if (markup) {
          html += ' ' + markup
        }
      }
    }

    return `${html} id="${this._rootNodeID}">`
  }

  _createContentMarkup(transaction) {
    const { dangerouslySetInnerHTML, children } = this.props

    if (dangerouslySetInnerHTML?.__html) {
      return dangerouslySetInnerHTML.__html
    }

    // TODO 需要调整
    if (Array.isArray(children)) {
      let markup = ''

      for (let child of children) {
        if (child === null) continue

        console.log(child)
        if (child?.mountComponent) {
          markup += child.mountComponent()
        } else {
          markup += child
        }
      }
      return markup
    } else if (children !== null) {
      return children
    }

    return ''
  }

  _updateDOMProperties(nextProps) {
    const lastProps = this.props

    console.log(nextProps)

    for (const propKey of Object.keys(this.props)) {
      const lastProp = lastProps[propKey]
      const nextProp = nextProps[propKey]

      if (lastProp === nextProp) continue


      // TODO
    }
  }

  _updateDOMChildren(nextProps, transaction) {
    const lastUsedChildren = this.props.children
    const childrenToUse = nextProps.children

    if (lastUsedChildren !== childrenToUse) {
      ReactComponent.DOMIDOperations.updateTextContentByID(
        this._rootNodeID,
        '' + childrenToUse
      );
    }
  }
}

export default ReactNativeComponent
