/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 14:02:08
 * @LastEditTime: 2024-01-29 16:52:06
 * @Description:  类型定义
 */
export type AnyObject<T = any> = Record<string | number, T>

export interface ICanvasInstanceOptions<T = HTMLCanvasElement | WechatMiniprogram.Canvas> {
    element: T;
    dataSource: Array<ICanvasItemType>;
    width: number;
    height: number;
    success: (canvas: T) => void;
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

export interface ICanvasImageItemOptions<T = string> extends ICommmonItemOptions {
    width: number;
    height: number;
    style?: AnyObject<string | number>;
    r?: number;
}

export interface ICanvasTextItemOptions extends ICommmonItemOptions {
    fontSize?: number;
    fontFamlily?: string;
    color?: string;
    style?: AnyObject;
}
