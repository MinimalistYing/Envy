const map = new Map()
export default {
  getCachedNodeByID(id) {
    if (map.has(id)) {
      return map.get(id)
    }
    const dom = document.getElementById(id)
    map.set(id, dom)
    return dom
  }
}
