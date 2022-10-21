import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="main-bg-container">
        <h1 className="greeting-heading">Welcome</h1>
        <p className="greeting-info">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
