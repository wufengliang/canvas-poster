/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 18:06:22
 * @LastEditTime: 2024-02-04 11:33:39
 * @Description:  浏览器模式
 */
import { BaseCanvasInstance } from './base';
import { ICanvasInstanceOptions, ICanvasTextItemOptions } from './type';

export class BrowserCanvasInstance extends BaseCanvasInstance {
    constructor(options: ICanvasInstanceOptions) {
        super(options);
    }

    /**
     * 获取图片实例资源
     */
    async getRenderImageInstance(url: string): Promise<HTMLImageElement> {
        const image = new Image;
        image.src = url;
        image.crossOrigin = 'Anonymous';
        return new Promise((resolve) => {
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

        for (let key in style) {
            if (key in ctx) {
                (ctx as unknown as Record<string, any>)[key] = style[key];
            }
        }
        return { ...value, fontSize, fontFamlily, color, style }
    }
}
