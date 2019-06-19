// 初始化整个游戏的精灵、作为游戏开始的入口
import { ResourceLoader } from 'js/base/ResourceLoader.js'
export class Main {
  constructor() {
    const canvas = wx.createCanvas()
    const context = canvas.getContext('2d')
    const loader = ResourceLoader.create()
    loader.onLoaded(map => { this.onLoadedResourceFirst(map) })
  }
  // 首次加载资源，每次游戏开始时，只需重置游戏逻辑数据即可，不需要再次加载资源
  onLoadedResourceFirst(map) {
    console.log(map)
  }
}