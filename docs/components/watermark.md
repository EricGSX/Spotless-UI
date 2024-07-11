---
nav:
  title: 组件
  order: 0
group:
  title: 反馈
  order: 5
---

# Watermark 水印

## 基本用法

```tsx
import { Watermark } from 'spotless-ui';

export default () => (
  <div>
    <Watermark content="Spotless UI">
      <div
        style={{
          height: '300px',
        }}
      >
        Content
      </div>
    </Watermark>
  </div>
);
```

## API 文档

| 参数    | 说明     | 类型     | 默认值      |
| ------- | -------- | -------- | ----------- |
| content | 水印内容 | `string` | Spotless UI |
| color   | 水印颜色 | `string` | `#ebebeb`   |
