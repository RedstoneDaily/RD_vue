# 红石日报

这个模板应该有助于你开始在 Vite 中使用 Vue 3 进行开发。 ##推荐的 IDE 设置
[VSCode](https://code.visualstudio.com/)+[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## 自定义配置

请参阅[Vite 配置参考](https://vitejs.dev/config/). 

## 项目设置

```sh
pnpm i
```

### 编译和热重载开发

```sh
pnpm dev
```

### 编译和缩小生产规模

```sh
pnpm build
```

### 使用[ESLint](https://eslint.org/)

```sh
pnpm lint
```

# 项目代码都放在 src 目录下

- App.vue 是根组件
- views 是放页面的地方
- components 是组件
  - 其中 tool 是放一些通用工具组件的地方，比如说：按钮、链接、表单等
  - 其他文件夹是页面的组件，对应着 views 文件夹下的页面

## 用了以下依賴：

- 主依赖
  - [Pinia](https://pinia.vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
  - [url-polyfill](https://github.com/lifaon74/url-polyfill)
  - [aegis-web-sdk](https://cloud.tencent.com/document/product/1464)
- 开发依赖
  - [ESLint](https://eslint.org/)
  - [Vite](https://vitejs.dev/)
  - [vite-plugin-vue-devtools](https://devtools-next.vuejs.org/)
