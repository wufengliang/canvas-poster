/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 18:06:22
 * @LastEditTime: 2024-01-29 14:10:07
 * @Description:  浏览器模式
 */
import { BaseCanvasInstance } from './base';
import { ICanvasImageItemOptions, ICanvasInstanceOptions, ICanvasTextItemOptions } from './type';

export class BrowserCanvasInstance extends BaseCanvasInstance {
    constructor(options: ICanvasInstanceOptions) {
        super(options);
    }

    /**
     * 获取图片实例资源
     */
    async getRenderImageInstance(url: string) {
        const image = new Image;
        image.src = url;
        image.crossOrigin = 'Anonymous';
        return new Promise((resolve) => {
            image.onload = () => resolve(image);
        })
    }

    drawCircleImage(data: ICanvasImageItemOptions<CanvasImageSource>) {
        const { ctx } = this;
        const { x, y, width, height, value, id } = data;
        const centerX = x + width / 2, centerY = y + height / 2;
        const radius = Math.min(centerX, centerY);
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(value, centerX - radius, centerY - radius, radius * 2, radius * 2);
        ctx.restore();
    }

    drawNormalImage(data: ICanvasImageItemOptions<CanvasImageSource>) {
        const { ctx } = this;
        const { x, y, width, height, value } = data;
        ctx.save();
        ctx.beginPath();
        ctx.drawImage(value, x, y, width, height);
        ctx.restore();
    }


    setTextStyle(value: ICanvasTextItemOptions): ICanvasTextItemOptions {
        const { ctx, defaultFontFamlily } = this;
        const { fontSize = 12, fontFamlily = defaultFontFamlily, color = '#000', style = {} } = value;
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
