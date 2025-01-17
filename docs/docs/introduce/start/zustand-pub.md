---
title: 跨应用/跨框架 状态管理及共享（zustand-pub）
tags:
  - zustand-pub
  - 业务组件跨应用状态共享
  - 微前端组件跨应用状态共享
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)

:::tip
### [Micro-FrontEnd Demo Source](https://github.com/AwesomeDevin/zustand-pub/tree/main/demo/micro-frontend)
:::

## 应用场景
为模块化、组件化、微前端等业务场景，提供跨应用、跨框架的状态管理及共享能力。

## 安装 
```shell
npm install zustand-pub # or yarn add zustand-pub
```


## 用法

### Step 1： 初始化状态隔离容器 `pubStore` (App A)
```js
import PubStore from 'zustand-pub'

const pubStore = new PubStore('key')
```

### Step 2： 往隔离容器 `pubStore` 内填装数据 `platformStore` (App A)
```js
//react
import create from "zustand";

// vue
// import create from "zustand-vue";

interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

const platformStore = pubStore.defineStore<IState & IAction>('platformStore', (set) => ({
  appInfo: { name: '' },
  setAppName(val: string) {
    set({
      appInfo: {
        name: val
      }
    })
  }
}))

const usePlatformStore = create(platformStore)
```
返回值 `usePlatformStore` 为 `hook`，可通过状态 `selector` 获取对应状态
```js
// react
function AppA() {
  const name = usePlatformStore((state) => state.appInfo.name);
  const setAppName = usePlatformStore((state) => state.setAppName);
  return <div>{name}</div>
}
``` 

### Step 3： 获取隔离容器 `pubStore` 下的数据 `platformStore` 并绑定组件 (App B)
```js
interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

// react
import PubStore from "zustand-pub";
import create from "zustand";
const pubStore = new PubStore('key')

// vue
// import PubStore from "zustand-pub";
// import create from "zustand-vue";
// const pubStore = new PubStore('key')


const store = pubStore.getStore<IState & IAction>("platformStore");
const usePlatformStore = create(store || {});

// react
function AppB() {
  const name = usePlatformStore((state) => state.appInfo.name);
  const setAppName = usePlatformStore((state) => state.setAppName);
  return <div>{name}</div>
}
```
:::tip
 [使用 Vue 绑定组件](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand-vue#step-3-store-%E7%BB%91%E5%AE%9A%E7%BB%84%E4%BB%B6%E5%B0%B1%E5%AE%8C%E6%88%90%E4%BA%86)
:::

## API

### PubStore(str) 
用于创建状态隔离容器, 不同隔离容器内部的数据 `key` 可重名且互不影响

:::tip
 同一应用下，`key` 不变，返回的 `pubStore` 不变
:::

```js
const pubStore = new PubStore() 
```

### defineStore(key,fn)
用于往隔离容器填装数据

:::tip
 同一应用下，`key` 不变，被定义的 `store` 会按加载的先后顺序进行合并  

 即 `defineStore(key,()=>({a:1})) defineStore(key,()=>({b:2}))` 作用类似于 `defineStore(key,()=>({a:1,b:2}))`
:::

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string
fn | callback | (set, get) => Object


```js
interface IStore {
  ...
}

// usePlatformStore 为 `hook`，可通过状态 `selector` 获取对应状态
const usePlatformStore = pubStore.defineStore<IStore>('platformStore', (set, get) => ({}))
```


### getStore(key)
用于从隔离容器获取数据

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string

```js
const platformStore = pubStore.getStore("platformStore");
```
返回值 `platformStore` 可用于构建 `hook`
```js
import create from "zustand";

//vue
// import create from "zustand-vue";

const usePlatformStore = create(platformStore || {});
```



