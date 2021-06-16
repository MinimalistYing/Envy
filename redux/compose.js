/**
 * 用途很简单，如下
 * 
 * compose(f, g, h)(...args) => f(g(h(...args)))
 * 
 * @param  {array} funcs 
 */
export default function compose(...funcs) {
  // 如果没有传入任何参数 则直接返回一个会将第一个参数返回的函数
	if (funcs.length === 0) {
		return arg => arg
	}
	
	// 如果参数只有一个函数则直接将该函数返回
	if (funcs.length === 1) {
		return funcs[0]
	}
	
	// 关于 Array.prototype.reduce 
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
