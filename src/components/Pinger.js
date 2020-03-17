import React from 'react'
import axios from 'axios'
import moment from 'moment'

export default class Pinger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: props.url,
      pingCount: 0,
      lastTime: ''
    } 
  }

  componentDidMount() {
    setInterval(this.pingIt(this.props.url), 1680000)
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      setInterval(this.pingIt(this.props.url), 1680000)
    }
  }


  pingIt = url => {
    let num = this.state.pingCount
    
    const time = new Date()
    const currentHour = time.getHours()

    if ( currentHour > 7 ) {

      axios.get(url)
        .then(res => {
          console.log(res)
          // if (res.status === 200) {
            this.setState({
              pingCount: ++num,
              lastTime: moment().format('LT')
            })
        })
    }
    else {
      this.setState({
        message: "Sleeping Now..."
      })
    }
  }

  render() {
    // this.pingIt(this.state.url)
    return (
      <div>
       { this.state.message ? <h4>{this.state.message}</h4> : <h4>{this.props.url} ping count is {this.state.pingCount}. Last pinged at {this.state.lastTime}</h4> }
      </div>
    )
  }
}