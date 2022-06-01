const containersByReactRootID = new Map()
const instanceByReactRootID = new Map()

const ReactMount = {
  renderComponent(nextComponent, container) {
    const prevComponent = instanceByReactRootID.get(getReactRootID(container))

    if (prevComponent) {
      if (prevComponent.constructor === nextComponent.constructor) {
        prevComponent.replaceProps(nextComponent.props)

        return prevComponent
      } else {

      }
    }

    const reactRootID = ReactMount.registerContainer(container)

    instanceByReactRootID.set(reactRootID, nextComponent)

    nextComponent.mountComponentIntoNode(reactRootID, container)
    return nextComponent
  },


  registerContainer(container) {
    let reactRootID = getReactRootID(container)

    if (!reactRootID) {
      reactRootID = window.crypto.randomUUID()
    }

    containersByReactRootID.set(reactRootID, container)

    return reactRootID
  }
}

function getReactRootID(container) {
  return container.firstChild && container.firstChild.id;
}

export default ReactMount
