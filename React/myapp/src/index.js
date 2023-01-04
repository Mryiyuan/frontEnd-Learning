import React from 'react'
import { createRoot } from 'react-dom/client'
//import ReactDOM from 'react-dom'
// import App from './01-base/01-class组件'
// import App2 from './01-base/02-函数式组件'
// import App3 from './01-base/03-组件的嵌套'
// import App4 from './01-base/04-组件的样式'
import App5 from './01-base/06-事件绑定-2'
// ReactDOM.render(
//     <div>
//         <b>list</b>
//         <ul>
//             <li>aa</li>
//             <li>bb</li>
//             <li>cc</li>
//             <li>dd</li>
//         </ul>
//     </div>
//     , document.getElementById("root"))

// jsx == js + xml


// createRoot(document.getElementById).render(React.createElement(
//     "div",{
//     id:"aaa",
//     class:"bbb"
// },"1111111111"))

//createRoot(document.getElementById)
//----------------------------------------------------------------
//In React 18, is needed to:import { createRoot } from 'react-dom/client'
//creates your root container with this function:
const root = createRoot(document.getElementById("root"));

//and then render your root app:
root.render(
    <App5/>
    // <div>
    //     <b>list</b>
    //     <ul>
    //         <li>aa</li>
    //         <li>bb</li>
    //         <li>cc</li>
    //         <li>dd</li>
    //     </ul>
    // </div>
    );