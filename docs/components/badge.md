---
nav:
  title: 组件
  order: 0
group:
  title: 数据展示
  order: 4
---

# Badge 标签

## 基本用法

```tsx
import { Badge } from 'intellgence_ui';

const divStyle: React.CSSProperties = {
  fontSize: '16px',
  backgroundColor: '#cccccc',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div>
    <Badge count="3" color="red">
      <div style={divStyle}>Box</div>
    </Badge>{' '}
    &nbsp;&nbsp;
    <Badge count="10000" color="#52c41a">
      <div div style={divStyle}>
        Box
      </div>
    </Badge> &nbsp;&nbsp;
    <Badge overflowCount="10" count="10000" color="#faad14">
      <div div style={divStyle}>
        Box
      </div>
    </Badge>{' '}
    &nbsp;&nbsp;
  </div>
);
```

## API 文档

| 参数          | 说明                                                                   | 类型   | 默认值 |
| ------------- | ---------------------------------------------------------------------- | ------ | ------ |
| count         | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | number | 99     |
| overflowCount | 封顶的数字值                                                           | number | -      |
| color         | 徽标颜色                                                               | string | red    |
