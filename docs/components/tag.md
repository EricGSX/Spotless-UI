---
nav:
  title: 组件
  order: 0
group:
  title: 数据展示
  order: 4
---

# Tag 标签

## 基本用法

```tsx
import { Tag } from 'spotless-ui';

export default () => (
  <div>
    <Tag color="default" text="default"></Tag> &nbsp;
    <Tag color="magenta" text="magenta"></Tag> &nbsp;
    <Tag color="red" text="red"></Tag> &nbsp;
    <Tag color="volcano" text="volcano"></Tag> &nbsp;
    <Tag color="orange" text="orange"></Tag> &nbsp;
    <Tag color="gold" text="gold"></Tag> &nbsp;
    <Tag color="lime" text="lime"></Tag> &nbsp;
    <Tag color="green" text="green"></Tag> &nbsp;
    <Tag color="cyan" text="cyan"></Tag> &nbsp;
    <Tag color="blue" text="blue"></Tag> &nbsp;
    <Tag color="geekblue" text="geekblue"></Tag> &nbsp;
    <Tag color="purple" text="purple"></Tag> &nbsp;
  </div>
);
```

## 自定义颜色

```tsx
import { Tag } from 'spotless-ui';

export default () => (
  <div>
    <Tag color="#f50" text="#f50"></Tag> &nbsp;
    <Tag color="#2db7f5" text="#2db7f5"></Tag> &nbsp;
    <Tag color="#87d068" text="#87d068"></Tag> &nbsp;
    <Tag color="#108ee9" text="#108ee9"></Tag> &nbsp;
  </div>
);
```

## API 文档

| 参数      | 说明                                     | 类型    | 默认值 |
| --------- | ---------------------------------------- | ------- | ------ |
| text      | Tag 文案                                 | string  | -      |
| color     | Tag 颜色 （支持默认 color 与自定义颜色） | string  | -      |
| closeIcon | 是否展示关闭按钮                         | boolean | false  |
| onClick   | 对外暴露的点击事件                       | Object  | -      |
