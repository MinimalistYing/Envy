import { useContext, useReducer, useEffect } from 'react'

import Context from '../components/Context'

import bindActionCreators from '../utils/bindActionCreators'

export default function connectAdvanced(test, {
  shouldHandleStateChanges,
  mapStateToProps = () => {},
  mapDispatchToProps = dispatch => ({ dispatch }),
  pure,
}) {
  return function wrapWithConnect(WrappedComponent) {
    return function HOC(props) {
      const context = useContext(Context)
      const dispatch = context.store.dispatch
      const [ignored, refresh] = useReducer(i => i + 1, 0);

      if (typeof mapDispatchToProps === 'object') {
        mapDispatchToProps = bindActionCreators(mapDispatchToProps, dispatch)
      }

      useEffect(() => {
        const unsubscribe = context.store.subscribe(refresh)
        console.log(123)

        return unsubscribe
      }, [])

      return (
        <WrappedComponent
          {...mapStateToProps(context.store.getState(), props)}
          {...(typeof mapDispatchToProps === 'object' ?
            mapDispatchToProps : mapDispatchToProps(dispatch, props))}
          {...props}
        />
      )
    }
  }
}
