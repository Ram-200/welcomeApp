import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {isSubscribe: 'Subscribe', isSubscribed: 'Subscribed'}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: prevState.isSubscribed,
    }))
  }

  onSubscribed = () => {
    this.setState({
      isSubscribe: 'Subscribe',
      isSubscribed: 'Subscribed',
    })
  }

  render() {
    const {isSubscribe, isSubscribed} = this.state
    let res
    if (isSubscribe === 'Subscribe') {
      res = (
        <button type="button" className="button" onClick={this.onSubscribe}>
          {isSubscribe}
        </button>
      )
    } else {
      res = (
        <button type="button" className="button" onClick={this.onSubscribed}>
          {isSubscribed}
        </button>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {res}
      </div>
    )
  }
}
export default RandomNumberGenerator
