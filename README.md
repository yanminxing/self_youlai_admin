# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.





# 1 项目初始化

## 1.1 新建项目

1 新建项目

```npm
npm init vite@latest self_youlai_admin  --tem
plate vue-ts
```

2 创建github仓库

```
// 关联仓库名称
git remote add origin git@github.com:yanminxing/self_youlai_admin.git
```

## 1.2 tsconfig.json

1 参考

[typeScript tsconfig配置详解](https://juejin.cn/post/6844904093568221191)

2 给tsconfig.json注释

```json
{
  "compilerOptions": {
    // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "target": "esnext",

    "useDefineForClassFields": true,
    // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "module": "esnext",
    // 用于选择模块解析策略，有'node'和'classic'两种类型
    "moduleResolution": "node",
    // 严格模式
    "strict": true,
    // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "jsx": "preserve",
    // 用来指定编译时是否生成.map文件
    "sourceMap": true,
    "resolveJsonModule": true,
    // 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
    "esModuleInterop": true,
    /* 注意：如果未指定--lib，则会注入默认的librares列表。注入的默认库为：
       对于 --target ES5: DOM,ES5,ScriptHost
       对于 --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
       TS 绝不会在您的代码中注入polyfill,所以需要你自己制定编译lib */
    "lib": ["esnext", "dom"]
  },
  // 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 1.3 env.d.ts

1 为何

ts只能理解ts文件，不能理解.vue文件。因此需要给vue文件加上类型说明

2 代码

```typescript
// <reference types="vite/client" />

/**
 * @description ts只能理解ts文件，不能理解.vue文件。因此需要给vue文件加上类型说明
 * */
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
```









