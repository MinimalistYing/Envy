export default function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {}
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    boundActionCreators[key] = (...args) => {
      console.log(args);
      return dispatch(actionCreator(...args))
    }
  }
  console.log(boundActionCreators);
  return boundActionCreators
}
