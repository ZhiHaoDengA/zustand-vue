---
title: 对比其他状态管理框架
tags:
  - 对比
  - 比较
---

### 为什么是 zustand 而不是 redux？
- 轻巧灵活
- 将 `hooks` 作为消费状态的主要手段
- 不需要使用 `context provider` 包裹你的应用程序
- [可以做到瞬时更新(不引起组件渲染完成更新过程)](https://awesomedevin.github.io/zustand-vue/docs/advanced/transiend-updates)

### 为什么是 zustand 而不是 react Context？
- 不依赖 `react` 上下文，引用更加灵活
- 当状态发生变化时重新渲染的组件更少
- 集中式的、基于 actions 的状态管理


### 更多
- [React 状态管理工具优劣势分析 context / redux / mobx / zustand / jotai / recoil / valtio](https://github.com/AwesomeDevin/blog/issues/81)
- [Pmnd 的对比分析](https://docs.pmnd.rs/zustand/getting-started/comparison)