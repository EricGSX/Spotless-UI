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
