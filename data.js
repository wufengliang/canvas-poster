var options = {
    element,
    width: 375,
    height: 812,
    dataSource: [
        {
            type: 'image',
            value: {
                width: 375,
                height: 812,
                content: 'https://www.bigwhitewhale.cn/imgs/home/dabaijingImag01.jpg',
                x: 0,
                y: 0,
            },
        },
        {
            type: 'image',
            value: {
                width: 250,
                height: 150,
                content: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hjG9I.img',
                x: 60,
                y: 250,
                id: 'banner',
            },
        },
        {
            type: "text",
            value: {
                content: '双十一CP模拟大冒险！沙面',
                x: 0,
                y: 160,
                fixed: true,
                fontSize: 20,
                parentId: "banner",
                color: '#000',
                id: 'title-1',
            }
        },
        {
            type: 'text',
            value: {
                content: '岛见！',
                x: 0,
                y: 30,
                fixed: true,
                parentId: 'title-1',
                id: 'title-1-1',
                color: '#000',
                fontSize: 20,
            }
        },
        {
            type: 'text',
            value: {
                content: "11-14 星期日14:00(5 天后)",
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
                content: "￥",
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
                content: "68",
                fixed: true,
                parentId: 'rmb',
                id: 'rmb-icon',
                fontSize: 16,
                x: 12,
                y: -3,
                color: '#1677ff'
            }
        },
        {
            type: 'text',
            value: {
                content: "人均",
                fixed: true,
                parentId: 'rmb-icon',
                fontSize: 12,
                x: -5,
                y: 25,
                color: '#ccc'
            }
        },
        {
            type: 'text',
            value: {
                content: "广州市荔湾区沙面",
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
                content: 'https://img2.baidu.com/it/u=3540057304,61341418&fm=253',
                x: 137.5,
                y: 600,
            },
        },
    ]
}
