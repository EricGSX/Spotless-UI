---
nav:
  title: 组件
  order: 0
group:
  title: 通用
  order: 0
---

# Button 按钮

## 基本用法

```tsx
import { Button } from 'spotless-ui';

export default () => (
  <div>
    <Button type="primary" text="Primary"></Button> &nbsp; &nbsp;
    <Button type="info" text="Info"></Button> &nbsp; &nbsp;
    <Button type="success" text="Success"></Button> &nbsp; &nbsp;
    <Button type="warning" text="Warning"></Button> &nbsp; &nbsp;
    <Button type="danger" text="Danger"></Button>
  </div>
);
```

## API 文档

| 参数     | 说明                                                   | 类型      | 默认值  |
| -------- | ------------------------------------------------------ | --------- | ------- |
| text     | 按钮文案                                               | `string`  | -       |
| type     | 按钮类型 `primary` `info` `warning` `success` `danger` | `string`  | `info`  |
| isSubmit | 是否进行提交                                           | `boolean` | `false` |
| onClick  | 对外暴露的点击事件                                     | `Object`  | -       |
