---
nav:
  title: 组件
  order: 0
group:
  title: 导航
  order: 2
---

# Breadcrumb 面包屑

## 基础用法

```tsx
import { Breadcrumb } from 'spotless-ui';

export default () => (
  <div>
    <Breadcrumb
      separator=">"
      items={[
        { text: 'Home', link: '/' },
        { text: 'Products', link: '/products' },
        { text: 'Category', link: '/products/category' },
        { text: 'Current Page' },
      ]}
    ></Breadcrumb>
  </div>
);
```

## API 文档

| 参数      | 说明       | 类型                                 | 默认值 |
| --------- | ---------- | ------------------------------------ | ------ |
| separator | separator  | `ReactNode`                          | `-`    |
| items     | 路由栈信息 | `items[{text: string,link: string}]` |        |
