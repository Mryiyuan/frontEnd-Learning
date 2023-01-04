import React, { Component } from 'react'

export default class App5 extends Component {
    render() {
        return (
            <div>
                {/* 不同的写法调用事件 */}
                <input />
                <button onClick={() => {
                    console.log("click1")
                }}>add1</button>

                <button onClick={this.handleClick}>add2</button>
                <button onClick={this.handleClick2}>add3</button>
                <button onClick={() => {
                    this.handleClick3()
                }}>add4</button>
            </div>
        )
    }
    handleClick() {
        console.log("click2")
    }

    handleClick2 = () => {
        console.log("click3")
    }

    handleClick3 = () => {
        console.log("click4")
    }
}

