import { BaseCanvasInstance } from './base';
import type { ICanvasImageItemOptions, ICanvasInstanceOptions, ICanvasTextItemOptions } from './type';

export class MiniCanvasInstance extends BaseCanvasInstance {
    options: ICanvasInstanceOptions;
    constructor(options: ICanvasInstanceOptions) {
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
    async getRenderImageInstance(url: string) {
        const { element } = this.options;
        return new Promise((resolve) => {
            const image = (element as unknown as WechatMiniprogram.Canvas).createImage();
            image.src = url;
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
        const { x, y, width, height, value, id } = data;
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

        ctx.fillStyle = color;

        for (let key in style) {
            if (key in ctx) {
                (ctx as unknown as Record<string, any>)[key] = style[key];
            }
        }
        return { ...value, fontSize, fontFamlily, color, style }
    }
}
