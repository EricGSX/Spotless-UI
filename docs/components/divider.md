---
nav:
  title: 组件
  order: 0
group:
  title: 布局
  order: 2
---

# Divider 分割线

## 基本用法

```tsx
import { Divider } from 'spotless-ui';

export default () => (
  <>
    <p>
      <Divider>Diriver Line</Divider>
    </p>
    <p>
      <Divider orientation="left">Left Diriver Line</Divider>
    </p>
  </>
);
```

## API 文档

| 参数        | 说明       | 类型                      | 默认值   |
| ----------- | ---------- | ------------------------- | -------- |
| orientation | 分割线位置 | `left`、`right`、`center` | `center` |
