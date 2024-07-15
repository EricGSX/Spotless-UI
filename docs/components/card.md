---
nav:
  title: 组件
  order: 0
group:
  title: 数据展示
  order: 4
---

# Card 卡片

## 基本用法

```tsx
import { Card } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  margin: '20px',
};

export default () => (
  <div style={divStyle}>
    <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);
```

## API 文档

| 参数     | 说明                 | 类型        | 默认值  |
| -------- | -------------------- | ----------- | ------- |
| title    | Card 标题            | `string`    | -       |
| extra    | 卡片右上角的操作区域 | `ReactNode` | -       |
| isSingle | 是否隐藏卡片头部     | `boolean`   | `false` |
| bordered | 是否有边框           | `boolean`   | `true`  |
