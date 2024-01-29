/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 14:02:08
 * @LastEditTime: 2024-01-27 19:08:41
 * @Description:  类型定义
 */
export interface ICanvasInstanceOptions {
    element: HTMLCanvasElement;
    content: Array<ICanvasItemType>;
    width: string | number;
    height: string | number;
}

export interface ICanvasItemType {
    type: string;
    value: ICanvasItemOptions;
}

export type CanvasItemType = 'image' | 'text';

export interface ICanvasItemOptions<T = string> {
    width?: number;
    height?: number;
    value: T;
    fixed?: boolean;
    parentId?: string;
    x?: number;
    y?: number;
    style?: Record<string, string | number>;
    fontSize?: number;
    fontFamlily?: string;
    color?: string;
    r?: number;
    id?: string;
}