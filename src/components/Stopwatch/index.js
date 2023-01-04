// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  onClickStart = () => {
    this.setState({isTimerRunning: true})
    this.intervalId = setInterval(this.timer, 1000)
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onClickStop = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({seconds: 0})
  }

  timer = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  getElapsedSecondsInTimeFormat = () => {
    const {seconds} = this.state

    const updatedSeconds = Math.floor(seconds % 60)
    const minutes = Math.floor(seconds / 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds =
      updatedSeconds > 9 ? updatedSeconds : `0${updatedSeconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="app-cont">
        <h1>Stop Watch</h1>
        <div className="timer-cont">
          <h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />{' '}
            Timer
          </h1>
          <h1 className="time">{this.getElapsedSecondsInTimeFormat()}</h1>
          <div className="button-cont">
            <button type="button" className="start" onClick={this.onClickStart}>
              Start
            </button>
            <button type="button" className="stop" onClick={this.onClickStop}>
              Stop
            </button>
            <button type="button" className="reset" onClick={this.onClickReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
