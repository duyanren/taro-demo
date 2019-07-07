# taro小程序

## Taro 开发注意事项

### 文档

- 官方文档<https://nervjs.github.io/taro/>
- 百度小程序必须根目录手动新建 project.swan.json

### 关于 Taro JSX 支持程度补充说明

### 开发目录结构

```bash
── README.md
├── config
│   ├── dev.js
│   ├── index.js
│   └── prod.js
├── dist
│   ├── actions
│   │   └── counter.js
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── assets
│   │   ├── close-icon.png
│   │   └── fold-icon.png
│   ├── constants
│   │   └── counter.js
│   ├── npm
│   │   ├── @tarojs
│   │   │   ├── async-await
│   │   │   ├── redux
│   │   │   ├── taro
│   │   │   └── taro-weapp
│   │   ├── promise-polyfill
│   │   │   └── lib
│   │   ├── redux
│   │   │   └── lib
│   │   ├── redux-logger
│   │   │   └── dist
│   │   ├── redux-thunk
│   │   │   └── lib
│   │   ├── regenerator-runtime
│   │   │   └── runtime.js
│   │   ├── symbol-observable
│   │   │   └── lib
│   │   └── tslib
│   │       └── tslib.js
│   ├── pages
│   │   └── index
│   │       ├── index.js
│   │       ├── index.json
│   │       ├── index.wxml
│   │       └── index.wxss
│   ├── project.config.json
│   ├── reducers
│   │   ├── counter.js
│   │   └── index.js
│   ├── sitemap.json
│   └── store
│       └── index.js
├── global.d.ts
├── gulpfile.js
├── mock
│   ├── db.js
│   ├── factory
│   │   └── appGroup.js
│   ├── routes.js
│   └── server.js
├── package.json
├── project.config.json
├── src
│   ├── actions
│   │   └── counter.ts
│   ├── api
│   │   └── index.ts
│   ├── app.less
│   ├── app.tsx
│   ├── assets
│   │   ├── close-icon.png
│   │   └── fold-icon.png
│   ├── common
│   │   ├── md5.ts
│   │   ├── request.ts
│   │   ├── storage.ts
│   │   └── util
│   │       └── index.ts
│   ├── components
│   ├── constants
│   │   └── counter.ts
│   ├── css
│   ├── index.html
│   ├── model
│   ├── pages
│   │   └── index
│   │       ├── index.less
│   │       └── index.tsx
│   ├── reducers
│   │   ├── counter.ts
│   │   └── index.ts
│   └── store
│       └── index.ts
├── tsconfig.json
└── yarn.lock
```
