import { instantiateReactComponent } from "./instantiateReactComponent";

export const React = {
  // TODO: change to symbol
  nextReactRootIndex: 0,
  render: (element, container:Element) => {
    const componentInst = instantiateReactComponent(element);
    const markup = componentInst.mountComponent(React.nextReactRootIndex++);
    $(container).html(markup);
  },
}