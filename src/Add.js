import React, { Component } from 'react'

class Add extends Component {
  
  constructor(props){
    super(props)

    this.state = ({
      id:1,
      name:"yoshi",
      age:25,
      input:''
    })

  }
  handleChange = (e) => {
    console.log('e여',e)
  }
  
  render() {
    return (
      <div>
      <input onChange={this.handleChange()}>

      </input>
        <p>helloworld</p>
      </div>
    )
  }
}

export default Add