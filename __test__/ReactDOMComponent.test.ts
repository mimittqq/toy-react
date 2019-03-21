import { ReactDOMComponent } from './../lib/ReactDOMComponent';
import * as $ from 'jquery';

describe('test reactdomcomponent', () => {
  (window as any).$ = $;
  const component = new ReactDOMComponent({
    type: 'div',
    key: 1,
    props: {
      onClick: () => { console.log(1) },
      id: 'test',
      children: [{
        type: 'span',
        props: {
          id: 'child2',
          children: ['test, test, test'],
        },
      }]
    }
  })
  test('mountComponent', () => {
    expect(component.mountComponent(20)).toBe(
      '<div data-reactid="20" id="test"><span data-reactid="0" id="child2"><span data-reactid="1">test, test, test</span></span></div>'
    );
  })
})