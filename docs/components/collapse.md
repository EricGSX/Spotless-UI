---
nav:
  title: 组件
  order: 0
group:
  title: 数据展示
  order: 4
---

`

# Collapse 折叠面板

## 基本用法

```tsx
import { Collapse } from 'spotless-ui';

const panels: object[] = [
  { title: 'Panel 1', content: 'Content for panel 1' },
  { title: 'Panel 2', content: 'Content for panel 2' },
  { title: 'Panel 3', content: 'Content for panel 3' },
];

export default () => (
  <>
    <Collapse panels={panels}></Collapse>
  </>
);
```

## API 文档

### Collapse

| 参数   | 说明         | 类型      | 默认值 |
| ------ | ------------ | --------- | ------ |
| panels | 面板数据信息 | `Panel[]` | -      |

### Collapse.Panel

| 参数    | 说明       | 类型        | 默认值 |
| ------- | ---------- | ----------- | ------ |
| title   | 面板头内容 | `string`    | -      |
| content | 面板内容   | `ReactNode` | -      |
