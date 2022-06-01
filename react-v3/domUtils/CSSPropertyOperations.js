export default {
  /**
   *
   * > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * @param {*} styles
   */
  createMarkupForStyles(styles) {
    let ret = ''

    for (const [key, value] of Object.keys(styles)) {
      ret += `${key}:${value};`
    }
  }
}
