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
- 消極的方法 1: 將"./src/About.vue" 中的 "public about: string;" 和 "console.warn(this.about);" 先註解掉，待之後用到再加回。
- 消極的方法 2: 於tsconfig.json加上"strictPropertyInitialization":false"，來停用這檢查。
- 正解: 給予初始值 => 「public about: string;」 to 「public about: string = '';」

### 在run dev和部屬到IIS中都可以產生圖片，為什麼用github page不是js找不到路徑，就是圖片消失呢?
在開發者中工具中，發現github page的檔案會指到錯誤的路徑
####解決方法
調整webpack.config.js，以及部分src路徑，以確保能指向正確的相對路徑
- 在output.publicPath，的 /dist/ 取代成 ./dist/
- 將assets的結構納入dist中，以防AP Server的自動解析產生差距

## 自問自答
### 為什麼在Compoment中看不到類似"new Vue({  el: '#app'})" 的用法?
因為Compoment只會有一個Root element, 所以不需去指定對象。如果刻意弄出兩個以上的node，反而會出現「Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.」

### 要怎麼使用巢狀式 Router
設定參考: [Nested Routes](https://router.vuejs.org/en/essentials/nested-routes.html)
必須要先指定父子關係後，才能使用巢狀頁面(可見TestArea中的效果)
如果在沒有設定<router-view/>的父頁中中放入<router-view/>，不只不會有巢狀頁面的效果，反而會有警告訊息
child page宣告後，也可以被非parent page的使用，只是會連中間的一起路過
但如果使用的child page並沒有被宣告在底下，那就會失去巢狀的結構(會循可抵達的路徑開啟預期外的巢狀結構)

