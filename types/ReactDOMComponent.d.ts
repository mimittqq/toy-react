export interface ReactDOMComponent {
  _currentElement:any;
  _rootNodeID:number;
  mountComponent:(rootID:number) => string;
}

export type DOMComponentType = 'string' | 'number'