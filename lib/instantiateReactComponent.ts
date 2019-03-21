import { ReactDOMTextComponent } from './ReactDOMTextComponent';
import { ReactDOMComponentFacade } from 'types/ReactDOMComponent';
import { ReactDOMComponent } from './ReactDOMComponent';
import { ReactNode } from 'types/ReactElement';

/**
 * ReactComponent 实例工厂, 根据传入节点的类型判断返回的 component 值
 * @param node 节点
 * 
 */
export function instantiateReactComponent(node:ReactNode) : ReactDOMComponentFacade {
  if (typeof node === 'number' || typeof node === 'string') {
    return new ReactDOMTextComponent(node);
  } else if (typeof node === 'object' && typeof node.type === 'string') {
    return new ReactDOMComponent(node);
  }
}