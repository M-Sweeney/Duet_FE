import React from "react"
import axios from "axios"

export default class CreateComment extends React.Component {
 
  state = {
    "content": ''
  }

  handleChange = event => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const comment = {
      content: this.state.content
    }

    axios.post(`http://localhost:3001/comments/3`, { comment }).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className=" relative create-comment-div">
        <form className=" " onSubmit={this.handleSubmit}>
          <label>
            <input className=" w-10/12 h-24 create-comment-input" placeholder="WHAT'S ON YOUR MIND?" type="text" content="content" onChange={this.handleChange} />
          </label>
          <button className=" absolute bottom-0 right-36 font-semibold" type="submit">POST</button>
        </form>
      </div>
    )
  }
}
