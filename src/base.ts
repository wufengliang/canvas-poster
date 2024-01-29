/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 18:03:58
 * @LastEditTime: 2024-01-29 16:51:14
 * @Description: 
 */
import { type ICanvasInstanceOptions, type ICanvasItemType, ICanvasImageItemOptions, ICanvasTextItemOptions } from './type';

export abstract class BaseCanvasInstance {

    options: ICanvasInstanceOptions;
    context?: CanvasRenderingContext2D;

    /**
     * 缓存传入数据的起始坐标位置
     */
    private positionMap: Record<string, { x: number, y: number }> = {};


    /**
     * canvas渲染文字默认字体
     */
    defaultFontFamlily: string = 'sans-serif';

    constructor(options: ICanvasInstanceOptions) {
        this.options = options;
        this.init();
    }

    /**
    * canvas 渲染上下文
    */
    get ctx() {
        return this.context = this.context! ?? this.options.element.getContext('2d')!;
    }

    /**
     * 初始化操作
     */
    init() {
        this.validator();
        this.setDefaultFamlily();
        this.initElement();
    }

    /**
     * 校验元素
     */
    validator() {
        const { width, height } = this.options;
        if (!this.ctx) {
            throw new Error(`请确认canvas节点是否存在`);
        }

        if (!width || !height) {
            throw new Error(`请设置canvas的宽高度`);
        }
    }

    /**
     * 默认字体设置
     */
    setDefaultFamlily() {

    }

    /**
     * 初始化节点
     */
    initElement() {
        const { element, width, height } = this.options;
        element.width = width;
        element.height = height;
        this.render();
    }

    /**
     * 渲染数据
     */
    async render() {
        let item = null, index = 0;
        while (item = this.options.dataSource.shift()) {
            await this.renderItem(item, ++index);
        }

        const { success } = this.options;
        success && success(this.options.element);
    }

    /**
     * 渲染节点
     */
    async renderItem(data: ICanvasItemType, index: number) {
        const { type, value } = data;
        let { x = 0, y = 0, fixed = false, parentId = '', id = `${index}` } = value;
        if (fixed) {
            const parentPosition = this.positionMap[parentId];
            x += (parentPosition ? parentPosition.x : 0);
            y += (parentPosition ? parentPosition.y : 0);
        }
        const newValue = { ...value, x, y, fixed, parentId, id }
        switch (type) {
            case 'image':
                await this.renderImage(newValue as ICanvasImageItemOptions);
                break;
            case 'text':
                await this.renderText(newValue as ICanvasTextItemOptions);
                break;
            default:
                throw new Error(`当前还未适配${type}类型`);
        }
    }

    /**
     * 渲染图片
     */
    async renderImage(data: ICanvasImageItemOptions) {
        const { r = 0, width, height, id, x, y } = data;

        if (r > 0 && (r !== width / 2 || r !== height / 2)) {
            throw new Error(`当前传入的半径值不到宽或高的一半,无法绘制圆形`);
        }
        const value = await this.getRenderImageInstance(data.value);
        const newData = { ...data, value };
        r ? this.drawCircleImage(newData) : this.drawNormalImage(newData);
        this.positionMap[id!] = { x, y };
    }

    /**
     * 渲染文字
     */
    async renderText(data: ICanvasTextItemOptions) {
        const { ctx, defaultFontFamlily } = this;
        const { fontSize = 12, fontFamlily = defaultFontFamlily, color = '#000', style = {}, value, x, y, id } = data;
        const newData = this.setTextStyle({ ...data, fontSize, fontFamlily })
        const newY = y + newData.fontSize!;
        ctx.fillText(value, x, newY);
        this.positionMap[id!] = { x, y: newY }
    }

    /**
     * 设置渲染文字字体
     */
    abstract setTextStyle(value: ICanvasTextItemOptions): ICanvasTextItemOptions;

    /**
     * 获取canvas绘制图片的实例对象
     */
    abstract getRenderImageInstance(url: string): Promise<any>

    /**
     * 绘制图片圆形
     */
    abstract drawCircleImage(data: ICanvasImageItemOptions<CanvasImageSource>): void;

    /**
     * 绘制常规图片
     */
    abstract drawNormalImage(data: ICanvasImageItemOptions<CanvasImageSource>): void;
}