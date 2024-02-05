/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 14:02:08
 * @LastEditTime: 2024-02-04 15:05:03
 * @Description:  类型定义
 */
export type TCanvasType = HTMLCanvasElement | WechatMiniprogram.Canvas

export type AnyObject<T = any> = Record<string | number, T>

export type TPositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface ICanvasInstanceOptions<T extends TCanvasType = HTMLCanvasElement> {
  element: T
  dataSource: ICanvasItemType[]
  width: number
  height: number
  success: (canvas: TCanvasType, context?: CanvasRenderingContext2D) => void
}

export type CanvasItemType = 'image' | 'text'

export interface ICanvasItemType {
  type: CanvasItemType
  value: ICommmonItemOptions
}

export interface ICommmonItemOptions<T = string> {
  value: T
  fixed?: boolean
  x: number
  y: number
  id?: string
  parentId?: string
  position: TPositionType
}

export interface ICanvasImageItemOptions<T> extends ICommmonItemOptions<T> {
  width: number
  height: number
  style?: AnyObject<string | number>
  r?: number
}

export interface ICanvasTextItemOptions extends ICommmonItemOptions {
  fontSize?: number
  fontFamlily?: string
  color?: string
  style?: AnyObject
}
