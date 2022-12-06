import React from "react"
import axios from "axios"
import { useState } from "react"

export default function CreateComment({ user }) {
  const [content, setContent] = useState({
    name: user.name,
    photo: "https://imgur.com/LsLS8Gv.jpg",
    content: "",
  })

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(content)

    await axios
      .post(`http://localhost:3001/comments/${user.id}`, content)
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
          placeholder="WHAT'S ON YOUR MIND?"
          autoComplete="off"
          onChange={handleChange}
          value={content[""]}
        />
        <button
          className=" absolute bottom-1 right-24 text-sm md:right-60 md:text-base font-semibold"
          type="submit"
        >
          POST
        </button>
      </form>
    </div>
  )
}
