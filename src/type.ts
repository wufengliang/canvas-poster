/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 14:02:08
 * @LastEditTime: 2024-01-28 00:44:52
 * @Description:  类型定义
 */

export interface ICanvasInstanceOptions {
    element: HTMLCanvasElement | WechatMiniprogram.Canvas;
    dataSource: Array<ICanvasItemType>;
    width: string | number;
    height: string | number;
    success: (canvas: HTMLCanvasElement | WechatMiniprogram.Canvas) => void;
}

export type CanvasItemType = 'image' | 'text';

export interface ICanvasItemType {
    type: CanvasItemType;
    value: ICommmonItemOptions;
}

export interface ICommmonItemOptions<T = string> {
    value: T;
    fixed?: boolean;
    x: number;
    y: number;
    id?: string;
    parentId?: string;
}

export interface ICanvasImageItemOptions<T = string> extends ICommmonItemOptions<T> {
    width: number;
    height: number;
    style?: Record<string, string | number>;
    r?: number;
}

export interface ICanvasTextItemOptions extends ICommmonItemOptions {
    fontSize?: number;
    fontFamlily?: string;
    color?: string;
    style?: Record<string, any>;
}
