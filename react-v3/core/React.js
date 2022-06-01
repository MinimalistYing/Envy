import ReactCompositeComponent from './ReactCompositeComponent.js'
import ReactDOM from './ReactDOM.js'
import ReactMount from './ReactMount.js'

export default {
  DOM: ReactDOM,
  renderComponent: ReactMount.renderComponent,
  autoBind: ReactCompositeComponent.autoBind,
  createClass: ReactCompositeComponent.createClass,
}
