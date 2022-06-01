export default {
  createMarkupForProperty(name, value) {
    console.log(name, value)
    if (name === 'className') name = 'class'

    return `${name}="${value}"`
  }
}
