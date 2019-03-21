import { ReactDOMComponentFacade } from './../types/ReactDOMComponent.d';
export class ReactDOMTextComponent implements ReactDOMComponentFacade {
  _currentElement:string|number;
  _rootNodeID
  constructor(text:string|number) {
    this._currentElement = text;
  }
  mountComponent(rootID) {
    this._rootNodeID = rootID;
    return `<span data-reactid="${rootID}">${this._currentElement}</span>`;
  }
}