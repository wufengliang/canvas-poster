import { CanvasInstance as BrowserCanvasInstance } from './browser'
import { CanvasInstance as MiniCanvasInstance } from './mini'
import { type ICanvasInstanceOptions, type TCanvasType } from './type'

export class CanvasInstance {
  constructor (options: ICanvasInstanceOptions<TCanvasType>) {
    this.initOptions(options)
  }

  initOptions (options: ICanvasInstanceOptions<TCanvasType> | ICanvasInstanceOptions<WechatMiniprogram.Canvas>) {
    if (typeof window !== 'undefined') {
      return new BrowserCanvasInstance(options as ICanvasInstanceOptions<TCanvasType>)
    } else if (typeof wx !== 'undefined') {
      return new MiniCanvasInstance(options as ICanvasInstanceOptions<WechatMiniprogram.Canvas>)
    } else {
      throw new Error('当前运行环境未兼容')
    }
  }
}
