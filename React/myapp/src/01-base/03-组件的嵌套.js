import React, { Component } from 'react'
//export {Component}

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

class Navbar extends Component {
    render() {
        return (
            <div>Navbar
                <Child></Child>
            </div>
        )
    }
}


function Swiper() {
    return (
        <div>Swiper</div>
    )
}



const Tabbar = () => {  
        return (
            <div>Tabbar</div>
        )
}

export default class App3 extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}