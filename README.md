### `canvas-poster` 海报生成器

#### `使用示例：`

#### `类型定义:`

##### `ICanvasInstanceOptions`类型

| 字段 | 类型 | 说明 | 是否必填 | 默认值
| - | - | - | - | -
| element | `HTMLCanvasElement \| WechatMiniprogram.Canvas` | `canvas节点` | `是` |`-`
| dataSource | `Array<ICanvasItemType>` | `数据源` | `是` | `-` |
| width | `Number` | `canvas节点宽度` | `是` |`-` |
| width | `Number` | `canvas节点高度` | `是` | `-` |
| success | `(canvas:HTMLCanvasElement \| WechatMiniprogram.Canvas) => void` | `canvas绘制成功回调` | `-` | `-`


##### `ICanvasItemType`类型
| 字段 | 类型 | 说明 | 是否必填 | 默认值
| - | - | - | - | -
| type | `CanvasItemType` | `渲染节点类型` | `是` | `-`
| value | `ICommmonItemOptions` | `渲染节点数据` | `是` | `-`

##### `CanvasItemType` 枚举类型
- `image`   图片类型
- `text`    文本类型


##### `ICommmonItemOptions<T=string>`类型
| 字段 | 类型 | 说明 | 是否必填 | 默认值
| - | - | - | - | -
| value | `T` | `节点数据` | `是` | `-`
| fixed | `boolean` | `节点是否固定` | `-` | `false`
| x | `number` | `x轴上坐标` | `是` | `0`
| y | `number` | `y轴上坐标` | `是` | `0`
| id | `string` | `渲染节点id标识符` | `-` | `数据对应索引值+1`
| parentId | `string` | `渲染节点的父级节点id标识符` | `-` | `-`
| position | `TPositionType` | `基于父级节点的定位起始位置` | `-` | `topLeft`

##### `TPositionType`枚举类型
-   `topLeft` 左上角
-   `topRight` 右上角
-   `bottomLeft` 左下角
-   `bottomRight`右下角


##### `ICanvasImageItemOptions<T>`，继承自`ICommmonItemOptions<T>`
| 字段 | 类型 | 说明 | 是否必填 | 默认值
| - | - | - | - | -
| width | number | `渲染图片节点宽度` | `是` | `-`
| height | number | `渲染图片节点高度` | `是` | `-`
| style | Record<string,string\|number> | `图片个性化样式` | `-` | `{}`
| r | number | `图片为圆形时，选择的半径` | `-` | `-`


##### `ICanvasTextItemOptions<T>`，继承自`ICommmonItemOptions<T>`
| 字段 | 类型 | 说明 | 是否必填 | 默认值
| - | - | - | - | -
| fontSize | number | `渲染文字节点的字体大小` | `是` | `-`
| fontFamlily | string | `渲染文字节点选择的字体` | `是` | `-`
| color | string | `字体节点的颜色值` | `-` | `-`
| style | Record<string,any> | `渲染文字节点的额外样式配置` | `-` | `{}`


###### `使用案例：`

- `Browser`浏览器

```
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Canvas Poster Demo</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script src="../../dist/canvas-poster.browser.min.iife.js"></script>
    <style>
        *{
            margin:0;
            padding:0;
        }
    </style>
</head>

<body>
    <canvas id="canvas"></canvas>
    <script>
        window.onload = function () {
            const element = document.querySelector('canvas');
            const options = {
                element,
                width: 375,
                height: 812,
                dataSource: [{
                    type: 'image',
                    value: {
                        width: 375,
                        height: 812,
                        value: 'https://www.bigwhitewhale.cn/imgs/home/dabaijingImag01.jpg',
                        x: 0,
                        y: 0,
                    },
                },
                {
                    type: 'image',
                    value: {
                        width: 250,
                        height: 150,
                        value: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hjG9I.img',
                        x: 60,
                        y: 250,
                        id: 'banner',
                    },
                },
                {
                    type: "text",
                    value: {
                        value: '双十一CP模拟大冒险！沙面',
                        x: 0,
                        y: 160,
                        fixed: true,
                        fontSize: 18,
                        parentId: "banner",
                        color: '#f00',
                        id: 'title-1',
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: '岛见！',
                        x: 0,
                        y: 10,
                        fixed: true,
                        parentId: 'title-1',
                        id: 'title-1-1',
                        color: '#000',
                        fontSize: 18,
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: "11-14 星期日14:00(5 天后)",
                        fixed: true,
                        parentId: 'title-1-1',
                        id: 'subTitle-1-1',
                        fontSize: 12,
                        x: 0,
                        y: 35,
                        color: '#000'
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: "￥",
                        id: 'rmb',
                        fontSize: 12,
                        x: 300,
                        y: 480,
                        color: '#1677ff'
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: "68",
                        fixed: true,
                        parentId: 'rmb',
                        id: 'rmb-icon',
                        fontSize: 16,
                        x: 12,
                        y: -15,
                        color: '#1677ff'
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: "人均",
                        fixed: true,
                        parentId: 'rmb-icon',
                        fontSize: 12,
                        x: -5,
                        y: 5,
                        color: '#ccc'
                    }
                },
                {
                    type: 'text',
                    value: {
                        value: "广州市荔湾区沙面",
                        fixed: true,
                        parentId: 'subTitle-1-1',
                        id: 'subTitle-1-2',
                        fontSize: 12,
                        x: 0,
                        y: 42,
                        color: '#000'
                    }
                },
                {
                    type: 'image',
                    value: {
                        fixed: true,
                        width: 100,
                        height: 100,
                        value: 'https://img2.baidu.com/it/u=3540057304,61341418&fm=253',
                        x: 137.5,
                        y: 600,
                    },
                },
                ]
            };
            new CanvasInstance.BrowserCanvasInstance(options);
        }
    </script>
</body>
```