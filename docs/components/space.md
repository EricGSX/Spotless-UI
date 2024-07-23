---
nav:
  title: 组件
  order: 0
group:
  title: 布局
  order: 2
---

# Space 间距

## 基本用法

```tsx
import { Space, Button } from 'spotless-ui';

export default () => (
  <div>
    <Space>
      Space
      <Button type="primary" text="Primary"></Button>
      <Button text="Info"></Button>
      <Button type="success" text="Success"></Button>
    </Space>
  </div>
);
```

## API 文档

| 参数      | 说明     | 类型                                  | 默认值       |
| --------- | -------- | ------------------------------------- | ------------ |
| align     | 对齐方式 | `start`、`end`、`center` 、`baseline` | `center`     |
| size      | 间距大小 | `number`                              | `8`          |
| direction | 间距方向 | `horizontal`,`vertical`               | `horizontal` |
