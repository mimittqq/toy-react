import { ReactElementFacade } from './../types/ReactElement.d';
/**
 * 创建一个虚拟节点
 * @param type 虚拟节点类型, 可以是 div, span 等字符串, 也可以是 ReactComponent 类
 * @param key 虚拟节点的 key, 在遍历结构的时候可以优化速度
 * @param props 节点的属性
 */
export class ReactElement implements ReactElementFacade {
  type;
  key;
  props
  constructor(type, key, props) {
    this.type = type;
    this.key = key;
    this.props = props;
  }
}