// 资源文件加载器，确保canvas在图片资源加载完成后才渲染
import { Resources } from './Resources.js'
export class ResourceLoader {
  constructor() {
    this.map = new Map(Resources)
    // 将map集合的键对应的值变为img标签
    for(let [key, value] of this.map) {
      var image = wx.createImage()
      image.src = value
      this.map.set(key, image)
    }
  }
  // 图片加载完全函数，当资源图片完全加载完毕后执行回调函数
  onLoaded(callback) {
    var loadCount = 0
    for(let value of this.map.values()) {
      value.onload = () => {
        loadCount++
        if(loadCount >= this.map.size) { // 所有资源加载结束
          callback && callback(this.map)
        }
      }
    }
  }
  // 创建该实例的方法, 返回一个实例对象
  static create() {
    return new ResourceLoader()
  }
}