import { ReactDOMComponentFacade } from './ReactDOMComponent.d';

export interface ReactElementFacade {
  type:string | ReactDOMComponentFacade;
  key:any;
  props:any;
}

export type ReactNode = number | string | ReactElementFacade;