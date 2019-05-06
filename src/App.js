import React from 'react';
import './App.css';
import TodoItem from './todoItem'

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputvalue: ''
    }

    {/* 这里的bind很重要 */ }
    this.changeinputvalue = this.changeinputvalue.bind(this)
    this.addList = this.addList.bind(this)
    this.clickItem = this.clickItem.bind(this)
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputvalue],
      inputvalue: ''
    })
  }
  changeinputvalue(e) {
    this.setState({ inputvalue: e.target.value })
  }
  clickItem(index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  getItem() {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem key={index} content={item} index={index} delete={this.clickItem}></TodoItem>
        // return <li key={index} onClick={this.clickItem.bind(this,index)}>{item}</li>
      })
    )
  }
  render() {
    return (
      <div className="App">
        <div>
          <input value={this.state.inputvalue} onChange={this.changeinputvalue} />
          <button className="button" onClick={this.addList}>add</button>
        </div>
        <ul>{this.getItem()}</ul>
      </div>
    )
  }a
}

export default App;
