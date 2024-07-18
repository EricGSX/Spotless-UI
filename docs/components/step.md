---
nav:
  title: 组件
  order: 0
group:
  title: 导航
  order: 2
---

# Steps 步骤条

## 基本用法

### 水平方向进度条

```tsx
import { Step, Icon } from 'spotless-ui';

const description = 'This is a description.';

export default () => (
  <div>
    <Step
      current={2}
      items={[
        {
          title: 'Finished',
          description,
          icon: <Icon name="CheckOutlined" color="white" size={32} />,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    ></Step>
  </div>
);
```

### 垂直方向进度条

```tsx
import { Step, Icon } from 'spotless-ui';

const description = 'This is a description.';

export default () => (
  <div>
    <Step
      direction="vertical"
      current={2}
      items={[
        {
          title: 'Finished',
          description,
          icon: <Icon name="CheckOutlined" color="white" size={32} />,
        },
        {
          title: 'Finished',
          description,
          icon: <Icon name="CheckOutlined" color="white" size={32} />,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    ></Step>
  </div>
);
```

## API 文档

### Step

| 参数      | 说明             | 类型                                | 默认值       |
| --------- | ---------------- | ----------------------------------- | ------------ |
| current   | 当前步骤节点     | `number`                            | `0`          |
| direction | 步骤条方向       | 水平 `horizontal`、 竖直 `vertical` | `horizontal` |
| items     | 步骤条选项卡内容 | `StepItem[]`                        | `-`          |

### StepItem

| 参数        | 说明         | 类型        | 默认值 |
| ----------- | ------------ | ----------- | ------ |
| description | 步骤描述信息 | `ReactNode` | `-`    |
| icon        | 步骤条 icon' | `ReactNode` | `-`    |
| title       | 步骤条标题   | `ReactNode` | `-`    |
