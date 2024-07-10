---
nav:
  title: 组件
  order: 0
group:
  title: 数据展示
  order: 4
---

# Ribbon 标签

## 基本用法

```tsx
import { Ribbon } from 'pristine-ui';

const divStyle: React.CSSProperties = {
  fontSize: '16px',
  height: '30px',
  lineHeight: '30px',
  border: '1px solid #ccc',
  padding: '5px',
  borderRadius: '4px',
  marginBottom: '10px',
};

export default () => (
  <div>
    <Ribbon text="Hippies">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
    <Ribbon text="Hippies" color="red">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
    <Ribbon text="Hippies" color="pink">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
  </div>
);
```

## API 文档

| 参数      | 说明           | 类型          | 默认值     |
| --------- | -------------- | ------------- | ---------- |
| text      | 丝带中展示内容 | `string`      | -          |
| placement | 丝带位置       | `start` `end` | `end`      |
| color     | 丝带颜色       | `string`      | `#1677ff;` |
