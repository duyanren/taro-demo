# taro 小程序

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

## Git Commit 规范

## 安装 commitizen 后，进行初始化

```bash
npm install -g commitizen or yarn global add commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

## 格式校验工具 commitlint

```bash
yarn add @commitlint/{config-conventional,cli} --dev
```

同时需要在项目目录下创建配置文件 .commitlintrc.js

```bash
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {},
};

```

安装 husky

```bash
yarn add husky@next -D
```

## 配置 package.json

```bash
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,jsx}": [
      "eslint --fix",
      "git add"
    ]
  },
```

## 生成 Changelog 工具 Conventional Changelog

```bash
yarn add standard-version --dev
```

然后配置 package.json 配置执行的脚本

```bash
{
  "scripts": {
    "release": "standard-version"
  }
}
```
