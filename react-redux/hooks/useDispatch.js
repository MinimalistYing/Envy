import useStore from './useStore'

export default function useDispatch() {
  return useStore().dispatch
}
