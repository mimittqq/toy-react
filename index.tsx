import { React } from "./lib/React";

React.render(React.createElement(
  'div',
  {
    onClick: () => {
      console.log(1)
    },
  },
  '111',
), document.getElementById('root'))