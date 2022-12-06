import React from "react"
import axios from "axios"
import { useState } from "react"

export default function UpdateComment({ user, pops }) {
  const [content, setContent] = useState({
    content: "",
  })

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(pops)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(pops)

    await axios
      .put(`http://localhost:3001/comments/${pops.id}`, content)
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }

  return (
    <div className=" relative create-comment-div">
      <form onSubmit={handleSubmit}>
        <input
          className=" w-10/12 h-24 create-comment-input"
          id="content"
          type="text"
          placeholder={pops.content}
          autoComplete="off"
          onChange={handleChange}
          value={content[""]}
        />
        <button
          className=" absolute bottom-1 right-24 text-sm md:right-60 md:text-base font-semibold"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
