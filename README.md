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

## Question
Q. "new Vue({  el: '#app'})" 為什看不到類似的用法呢? 是因為寫成Compoment、使用template、還是因為TypeScript而不見了呢?
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
從這錯誤來看，音位Compoment只會有一個root elm, 所以不需刻意去指定對象，很適合設定class

Q. 可是ID撞名時會怎樣?


Q. 使用巢狀式Router
https://router.vuejs.org/en/essentials/nested-routes.html
如果直接在有<router-view/>的父頁的某個子頁中放入<router-view/>，並不會有巢狀頁面的效果，反而會編譯失敗
必須要指定父子關係後，才能使用巢狀頁面(可見TestArea中的效果)

宣告後，仍然可以在更外層使用子頁面，只是會連中間的一起路過
反之，如果是在子頁面中使用未宣告的頁面，那會前置退到最外層

## ERROR
### 執行「npm run dev」時就出現錯誤「TS2564: Property 'about' has no initializer and is not definitely assigned in the constructor.」
因為TypeScript於 2.7版添加了--strictPropertyInitialization. 這標籤來確保屬性都有被實作或初始化。<br />
資料來源: [Announcing TypeScript 2.7 RC](https://blogs.msdn.microsoft.com/typescript/2018/01/17/announcing-typescript-2-7-rc/)
#### 解決方法
- Way 1: 將"./src/About.vue" 中的 "public about: string;" 和 "console.warn(this.about);" 先註解掉，待之後用到再加回。
- Way 2: 於tsconfig.json加上"strictPropertyInitialization":false"，來停用這檢查。
- Way 3: 使用舊版的TypeScript

