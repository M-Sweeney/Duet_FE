import React from "react"
import axios from "axios"
import { useState } from "react"

export default function DeleteComment({ comment }) {
  const [content, setContent] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(comment)

    await axios
      .delete(`http://localhost:3001/comments/${comment}`)
      .then((res) => {
        console.log(comment)
      })
  }


  return (
    <div className=" relative create-comment-div">
      <form onSubmit={handleSubmit}>
        <button
          className=" absolute text-red-400 text-xs -bottom-24 right-20 md:-bottom-24 md:right-32 font-semibold"
          type="submit"
        >
          DELETE
        </button>
      </form>
    </div>
  )
}
