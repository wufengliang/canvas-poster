/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 18:06:27
 * @LastEditTime: 2024-02-04 15:17:09
 * @Description:
 */
import { BaseCanvasInstance } from './base'
import type { ICanvasInstanceOptions, ICanvasTextItemOptions, AnyObject } from './type'

export class CanvasInstance extends BaseCanvasInstance<ICanvasInstanceOptions<WechatMiniprogram.Canvas>> {
  /**
     * 获取图片实例资源
     */
  async getRenderImageInstance (url: string): Promise<WechatMiniprogram.Image> {
    const { element } = this.options
    return await new Promise((resolve) => {
      const image = element.createImage()
      image.src = url
      image.onload = () => { resolve(image) }
    })
  }

  /**
     * 设置渲染文字字体
     */
  setTextStyle (value: ICanvasTextItemOptions): ICanvasTextItemOptions {
    const { ctx, defaultFontFamlily, defaultColor } = this
    const { fontSize = 12, fontFamlily = defaultFontFamlily, color = defaultColor, style = {} } = value
    ctx.font = `${fontSize}px ${fontFamlily}`
    ctx.fillStyle = color

    ctx.fillStyle = color

    for (const key in style) {
      if (key in ctx) {
        (ctx as unknown as AnyObject)[key] = style[key]
      }
    }
    return { ...value, fontSize, fontFamlily, color, style }
  }
}
