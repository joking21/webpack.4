# webpack配置

整理了一下自己的webpack配置，后面会继续完善-----版本  webpack 4

+ mode方式传入环境的取值
```javaxcript
const prefix = process.env.NODE_ENV === "development" ? '/dw' : '/api';
```

关于webpack4搭配，vue和react的路由坑
```javascript
historyApiFallback: true 
```
webpack4需要在devServer里面加这句，否则vue和react的路由，只有/#/这种hash模式的跳转之后，才能刷新，/tt,这种路由跳转刷新会报404


