/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 18:06:27
 * @LastEditTime: 2024-02-04 11:33:54
 * @Description: 
 */
import { BaseCanvasInstance } from './base';
import type { ICanvasInstanceOptions, ICanvasTextItemOptions, AnyObject } from './type';

export class MiniCanvasInstance extends BaseCanvasInstance<ICanvasInstanceOptions<WechatMiniprogram.Canvas>> {

    constructor(options) {
        super(options);
    }

    /**
     * canvas 渲染上下文
     */
    get ctx() {
        return this.context = this.context ?? this.options.element.getContext('2d')!;
    }

    /**
     * 获取图片实例资源
     */
    async getRenderImageInstance(url: string): Promise<WechatMiniprogram.Image> {
        const { element } = this.options;
        return new Promise((resolve) => {
            const image = element.createImage();
            image.src = url;
            image.onload = () => resolve(image);
        })
    }

    /**
     * 设置渲染文字字体
     */
    setTextStyle(value: ICanvasTextItemOptions): ICanvasTextItemOptions {
        const { ctx, defaultFontFamlily, defaultColor } = this;
        const { fontSize = 12, fontFamlily = defaultFontFamlily, color = defaultColor, style = {} } = value;
        ctx.font = `${fontSize}px ${fontFamlily}`;
        ctx.fillStyle = color;

        ctx.fillStyle = color;

        for (let key in style) {
            if (key in ctx) {
                (ctx as unknown as AnyObject)[key] = style[key];
            }
        }
        return { ...value, fontSize, fontFamlily, color, style }
    }
}
