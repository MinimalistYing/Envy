import ReactNativeComponent from './ReactNativeComponent.js'

const ReactDOM = {}

const tags = {
  a: false,
  abbr: false,
  address: false,
  audio: false,
  b: false,
  body: false,
  br: true,
  button: false,
  code: false,
  col: true,
  colgroup: false,
  dd: false,
  div: false,
  section: false,
  dl: false,
  dt: false,
  em: false,
  embed: true,
  fieldset: false,
  footer: false,
  // Danger: this gets monkeypatched! See ReactDOMForm for more info.
  form: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  header: false,
  hr: true,
  i: false,
  iframe: false,
  img: true,
  input: true,
  label: false,
  legend: false,
  li: false,
  line: false,
  nav: false,
  object: false,
  ol: false,
  optgroup: false,
  option: false,
  p: false,
  param: true,
  pre: false,
  select: false,
  small: false,
  source: false,
  span: false,
  sub: false,
  sup: false,
  strong: false,
  table: false,
  tbody: false,
  td: false,
  textarea: false,
  tfoot: false,
  th: false,
  thead: false,
  time: false,
  title: false,
  tr: false,
  u: false,
  ul: false,
  video: false,
  wbr: false,

  // SVG
  circle: false,
  g: false,
  path: false,
  polyline: false,
  rect: false,
  svg: false,
  text: false
}

for (const [tag, omitClose] of Object.entries(tags)) {
  ReactDOM[tag] = function (props, children) {
    return new ReactNativeComponent(props, children, tag, omitClose)
  }
}

export default ReactDOM
