---
nav:
  title: 组件
  order: 0
group:
  title: 反馈
  order: 5
---

# Reading Progress 阅读进度条

## 基本用法

```tsx
import { ReadingProgress } from 'spotless-ui';

export default () => (
  <div>
    <div
      style={{
        height: '200vh',
      }}
    ></div>
    <ReadingProgress color="blue"></ReadingProgress>
  </div>
);
```

## API 文档

| 参数  | 说明       | 类型     | 默认值 |
| ----- | ---------- | -------- | ------ |
| color | 进度条色值 | `string` | `#f80` |
