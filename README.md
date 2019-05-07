# webpack配置

整理了一下自己的webpack配置，后面会继续完善-----版本  webpack 4

+ mode方式传入环境的取值
```javaxcript
const prefix = process.env.NODE_ENV === "development" ? '/dw' : '/api';
```


