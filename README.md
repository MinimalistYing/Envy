# Envy
> The envy of the devil brought death to the world

## 目的
阅读源码当然是去深入了解开源库的重要途径，但是每个库的源代码里其实都有不少与核心逻辑无关，用于类型校验、性能优化、兼容、提示信息等用途的代码。  

如果仅仅出于了解库背后运行逻辑的目的，大多无关紧要的代码只会干扰人的思考。  

此外，想要理解代码背后运行的逻辑，最快的方式当然是将代码运行起来，通过断点观察执行过程。  

所以通过这个仓库，希望能对大家学习各开源库有所帮助。  

为了证明精简后的源码能正常运行，同时也为了方便大家能打断点观察，还会提供一个官方的 Demo，并把其中引入的源码替换。

## 运行
以 Redux 为例
```
cd redux-demo
npm i
npm run start
```
Ps: 该 Demo 中使用的 Redux 已进行了替换，所以你可以很方便的在本地对源码进行修改调试。

## 注意 ⚠️
* 会尽量采用源码中的变量名、目录结构、代码顺序方便对照源码查看。但为了保持清晰会移除一些函数、变量、文件。所以可以拿该仓库中的代码作参考，但不能保证能直接替换源码运行在所有生产环境。

## 进度
* Redux ✅
* React Redux
* React v3

## 最后
发现任何问题或者有更好的建议欢迎大家提 PR / Issue。
