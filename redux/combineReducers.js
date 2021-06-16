/**
 * 将分散写的各个 Reducer 组合成一个
 * 
 * @param {object} reducers 
 */
export default function combineReducers(reducers) {
	return (state = {}, action) => {
    const nextState = {}
    
    // 将 Action 依次传给所有的 Reducer 来获得修改后的状态
		for (const [key, reducer] of Object.entries(reducers)) {
			nextState[key] = reducer(state[key], action)
		}

		return nextState
	}
}
