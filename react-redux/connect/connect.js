import { useContext, useReducer, useEffect } from 'react'

import Context from '../components/Context'

export default function connect(mapStateToProps = () => {}, mapDispatchToProps = () => {}) {
  return function(WrappedComponent) {
    return function HOC(props) {
      const context = useContext(Context)
      const [ignored, refresh] = useReducer(i => i + 1, 0);

      if (typeof mapDispatchToProps === 'object') {
        for (let [k, func] of Object.entries(mapDispatchToProps)) {
          console.log(k, func)
          mapDispatchToProps[k] = (...args) => context.store.dispatch(func(...args))
        }
      }

      const dispatch = (typeof mapDispatchToProps) === 'function' ?
      {...mapDispatchToProps(context.store.dispatch, props)}
      :
      {...mapDispatchToProps}

      useEffect(() => {
        const unsubscribe = context.store.subscribe(() => {
          console.log(context.store.getState())
          refresh()
        })

        return unsubscribe
      })

      return (
        <WrappedComponent
          {...mapStateToProps(context.store.getState(), props)}
          {...dispatch}
          {...props}
          dispatch={context.store.dispatch}
        />
      )
    }
  }
}