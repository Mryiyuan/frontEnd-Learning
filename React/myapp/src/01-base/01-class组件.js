import React from 'react'
class Test {
    constructor() {
        this.a = 1;
    }
    testa() {
        console.log("testa")
    }

    testb() {

    }


}
//extends 继承
class ChildTest extends Test {
    testb() {
        console.log("testb")
    }
}

var obj = new ChildTest()
obj.testa()
obj.testb()
console.log(obj.a)


class App extends React.Component {
    render() {
        return (
        <div>
            hello react Component
            <ul>
                <li>11</li>
                <li>22</li>
            </ul>
        </div>
        )
    }
}

export default App