# vuesamplev3

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
## HomeWork
### 2018/02/08
1. 試著添加新的分頁，並寫點小東西
2. 試著引用別人的library
3. OAuth 2.0測試


## ERROR
### 執行「npm run dev」時就出現錯誤「TS2564: Property 'about' has no initializer and is not definitely assigned in the constructor.」
因為TypeScript於 2.7版添加了--strictPropertyInitialization. 這標籤來確保屬性都有被實作或初始化。<br />
資料來源: [Announcing TypeScript 2.7 RC](https://blogs.msdn.microsoft.com/typescript/2018/01/17/announcing-typescript-2-7-rc/)
#### 解決方法
- Way 1: 將"./src/About.vue" 中的 "public about: string;" 和 "console.warn(this.about);" 先註解掉，待之後用到再加回。
- Way 2: 於tsconfig.json加上"strictPropertyInitialization":false"，來停用這檢查。
- Way 3: 使用舊版的TypeScript

