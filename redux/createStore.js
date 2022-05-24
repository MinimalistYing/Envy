/**
 * Redux 的主入口
 *
 * @param {object} reducer 通常是 combineReducers 函数返回的 RootReducer
 * @param {*} preloadedState 初始状态
 * @param {function} enhancer 通常是 applyMiddleware 返回的中间件
 */
export default function createStore(reducer, preloadedState, enhancer) {
  // 如果使用中间件
  if (typeof enhancer !== 'undefined') {
    // 这里的逻辑需要在 applyMiddleware 去 createStore
    // applyMiddleware() 返回的是一个形如 createStore => (...args) => {} 的函数
    // 所以这里会对 enhancer(cerateStore) 返回的结果再次传入参数 (reducer, preloaderState) 调用
    return enhancer(createStore)(reducer, preloadedState)
  }

  console.warn('这是 Envy/redux 😊')

  let currentState = preloadedState
  let currentListeners = []

  /** 唯一获取 Redux State 的方式 */
  function getState() {
    return currentState
  }

  function dispatch(action) {
    // Action 通过 Reducer 后修改应用状态
    currentState = reducer(currentState, action)

    console.log('%%%%')

    for (const listener of currentListeners) {
      listener()
    }

    return action
  }

  function subscribe(listener) {
    currentListeners.push(listener)

    return function unsubscribe() {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  /**
   * 如果 Reducer 提供了默认的 state，那么在一步会将整个应用的状态树初始化
   */
  dispatch({ type: '@@redux/INIT' })

  return {
    getState,
    dispatch,
    subscribe,
  }
}
