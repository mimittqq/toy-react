import { React } from './React';
import { ReactDOMComponentFacade } from "types/ReactDOMComponent";
import { ReactElementFacade, ReactNode } from "types/ReactElement";
import { isEventName } from './utils/base';
import { instantiateReactComponent } from "./instantiateReactComponent";

export class ReactDOMComponent implements ReactDOMComponentFacade {
  _currentElement:ReactElementFacade;
  _rootNodeID;
  constructor(node:ReactElementFacade) {
    this._currentElement = node;
  }
  mountComponent(rootID:number) {
    this._rootNodeID = rootID;
    const { type, props } = this._currentElement;
    let tagOpen = `<${type} data-reactid="${rootID}"`;
    const tagClose = `</${type}>`;

    for (const propName in props) {
      if (isEventName(propName)) {
        $(document).on(RegExp.$1.toLowerCase(), `[data-reactid="${rootID}"]`, props[propName]);
      } else {
        if (propName !== 'children' && props[propName]) {
          tagOpen += ` ${propName}="${props[propName]}"`;
        }
      }
    }
    tagOpen += '>';
    let content = '';
    if (props) {
      const { children } = props;
      
      if (children) {
        children.forEach((child:ReactNode) => {
          const childComponentInstance = instantiateReactComponent(child);
          content += childComponentInstance.mountComponent(React.nextReactRootIndex++);
        });
      }
    }

    return `${tagOpen}${content}${tagClose}`;
  }
}