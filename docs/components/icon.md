---
nav:
  title: 组件
  order: 0
group:
  title: 通用
  order: 1
---

# Icon 图标

## 基本用法

### 方向性图标

```tsx
import { Icon } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  columnCount: 5,
  columnGap: 0,
};

const childStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div style={divStyle}>
    <div style={childStyle}>
      <Icon name="StepBackwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="StepForwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="FastBackwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="FastForwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ShrinkOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ArrowsAltOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="DownOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="UpOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="LeftOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="RightOutlined" size={60}></Icon>
    </div>
  </div>
);
```

### 提示建议性图标

```tsx
import { Icon } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  columnCount: 5,
  columnGap: 0,
};

const childStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div style={divStyle}>
    <div style={childStyle}>
      <Icon name="QuestionOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="QuestionCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="PlusOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="PlusCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="MinusOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="MinusCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="InfoCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CloseOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CloseSquareOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckSquareOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="WarningOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ClockCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ExclamationOutlined" size={60}></Icon>
    </div>
  </div>
);
```

## API 文档

| 参数  | 说明      | 类型     | 默认值     |
| ----- | --------- | -------- | ---------- |
| name  | Icon 类型 | `string` | -          |
| size  | Icon 大小 | `number` | `24`       |
| color | Icon 大小 | `string` | `#000000;` |
