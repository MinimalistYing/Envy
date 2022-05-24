import connectHOC from '../components/connectAdvanced'

export default function connect(mapStateToProps, mapDispatchToProps) {
  return connectHOC(null, {
    // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
    shouldHandleStateChanges: Boolean(mapStateToProps),
    mapStateToProps,
    mapDispatchToProps,
    pure: true,
  })
}