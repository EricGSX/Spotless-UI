---
nav:
  title: 组件
  order: 0
group:
  title: 反馈
  order: 5
---

# Spin 加载中

## 基本用法

```tsx
import { Spin } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  height: '200px',
  display: 'flex',
  alignItems: 'center',
};

export default () => (
  <div>
    <Spin text="Loading...">
      <div style={divStyle}> Where there's a will, there's a way</div>
    </Spin>
  </div>
);
```

## API 文档
