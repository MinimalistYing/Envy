import compose from './compose'

/**
 * 想要详细了解 Redux 中间件建议阅读：
 * https://redux.js.org/understanding/history-and-design/middleware#attempt-6-na%C3%AFvely-applying-the-middleware
 * 
 * 简单来说，中间件就是为了可以在每次 dispatch 前后加上一些公共逻辑
 * 
 * @param  {array} middlewares 
 */
export default function applyMiddleware(...middlewares) {
  // 注意 applyMiddleware 是一个高阶函数
	// 返回值是一个入参为 createStore 的函数
	return createStore => (...args) => {
		// 当使用中间件时，实际上 Redux 的 Store 是在这里被创建的
		const store = createStore(...args)
		let { dispatch, getState } = store
		
		// 只提供给中间件有限的 API
		const middlewareAPI = {
			getState,
			dispatch: action => dispatch(action)
		}

		// 由于 Redux 规定 middleware 是形如 store => next => action => {} 的函数
		// 处理过后在 chain 中存放的便是形如 next => action => {} 的函数
		const chain = middlewares.map(middleware => middleware(middlewareAPI))
		
		// 这里的 dispatch 是已经实现了中间件逻辑后的 dispatch 方法
		dispatch = compose(...chain)(dispatch)
		
		return {
			...store,
			dispatch, // 覆盖原 Store 的 dispatch
		}
	}
}