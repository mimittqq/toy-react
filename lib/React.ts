import { instantiateReactComponent } from "./instantiateReactComponent";
import { ReactElement } from './ReactElement';
import { ReactElementFacade } from "types/ReactElement";
import { ReactClass } from './ReactClass';

/**
 * 流程:
 * render 传入一个 element, element 通过 createElement 获得
 * 然后 render 实例化该 element, 并调用此 element 的 mountComponent 方法获得 element 的 html,
 * * 在 mountComponent 的过程中会把 props 中的事件做绑定, 并实例化 children,
 */
export const React = {
  // TODO: change to symbol
  nextReactRootIndex: 0,
  render: (element, container:Element) => {
    const componentInst = instantiateReactComponent(element);
    const markup = componentInst.mountComponent(React.nextReactRootIndex++);
    $(container).html(markup);
  },
  /**
   * 对传进来的参数进行处理, 合并 props
   */
  createElement: (type, config, ...children:any[]) : ReactElementFacade => {
    const props:any = {};
    const key = config.key || null;
    for (const propName in config) {
      if (config.hasOwnProperty(propName) && propName !== 'key') {
        props[propName] = config[propName];
      }
    }
    
    props.children = children;
    return new ReactElement(type, key, props);
  },
  /**
   * 创建一个 react 自定义组件类
   */
  createClass: (spec) => {
    const Constructor = function(props) {
      this.props = props;
      this.state = this.getInitialState ? this.getInitialState() : null;
    }
    Constructor.prototype = new ReactClass();
    Constructor.prototype.constructor = Constructor;

    Object.assign(Constructor.prototype, spec);
    return Constructor;
  },
}