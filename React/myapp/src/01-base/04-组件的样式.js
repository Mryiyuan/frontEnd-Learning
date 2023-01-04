import React, { Component } from 'react'
import './css/01-index.css'//导入css模块。webpack的支持

export default class App4 extends Component {
    render() {
        var myname = 'LCC'
        var test = {
            backgroundColor: "yellow",
            fontSize: "30px"
        }
        return (
            <div>
                {10 + 20}-{myname}-
                {10 > 20 ? "aaa" : "bbb"}
                {
                    /*
                    react推荐使用行内样式，因为官方认为react的组件是单独的整体
                    */
                }
                <div style={test}>11111111111</div>

                <div style={{ background: "red" }}>222222222222</div>

                <div className="active">33333333333</div>

                <div id="myapp">4444444444444</div>

                <label for="username">用户名：</label>
                <input type="text" id="username"></input>
            </div>
        )
    }
}
