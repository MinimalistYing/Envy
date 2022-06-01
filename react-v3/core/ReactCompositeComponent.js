import ReactComponent from './ReactComponent.js'

class ReactCompositeComponent extends ReactComponent {
  constructor(props, children) {
    super(props, children)
  }

  static autoBind(method) {
    method.bind(this)
    return method
  }

  static createClass(spec) {

    const constructor = function (props, children) {
      const instance = new ReactCompositeComponent(props, children)

      Object.assign(instance, spec)

      return instance
    }

    return constructor
  }

  mountComponent(rootID, transaction) {
    super.mountComponent(rootID, transaction)

    this.state = this.getInitialState ? this.getInitialState() : null

    this._renderedComponent = this._renderValidatedComponent()
    console.log(this._renderedComponent)

    return this._renderedComponent.mountComponent(rootID, transaction)
  }

  receiveProps(nextProps, transaction) {
    super.receiveProps(nextProps, transaction)

    this._receivePropsAndState(nextProps)
  }

  updateComponent(transaction) {
    const currentComponent = this._renderedComponent
    const nextComponent = this._renderValidatedComponent()

    if (currentComponent.constructor === nextComponent.constructor) {
      if (!nextComponent.props.isStatic) {
        currentComponent.receiveProps(nextComponent.props, transaction)
      }
    }
  }

  _receivePropsAndState(nextProps, nextState, transaction) {
    this._performComponentUpdate(nextProps, nextState, transaction)
  }

  _performComponentUpdate(nextProps, nextState, transaction) {
    const prevProps = this.props
    const prevState = this.state

    this.props = nextProps
    this.state = nextState

    this.updateComponent()
  }

  _renderValidatedComponent() {
    return this.render()
  }
}

export default ReactCompositeComponent
