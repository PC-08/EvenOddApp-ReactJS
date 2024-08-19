// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  addRandomNum = () => {
    const randomNumber = Math.random() * 100
    const countNumber = parseInt(randomNumber)

    this.setState(prevState => ({
      count: prevState.count + countNumber,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Count {count}</h1>
          <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button className="btn" onClick={this.addRandomNum} type="button">
            Increment
          </button>
          <p className="info">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
