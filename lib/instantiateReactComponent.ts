import { ReactDOMTextComponent } from './ReactDOMTextComponent';
import { ReactDOMComponent } from 'types/ReactDOMComponent';

/**
 * ReactComponent 实例工厂, 根据传入节点的类型判断返回的 component 值
 * @param node 节点
 * 
 */
export function instantiateReactComponent(node:any) : ReactDOMComponent {
  if (typeof node === 'number' || typeof node === 'string') {
    return new ReactDOMTextComponent(node);
  }
}