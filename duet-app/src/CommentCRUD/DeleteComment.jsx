import React from "react"
import axios from "axios"

export default function DeleteComment({ comment }) {
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios
      .delete(`http://localhost:3001/comments/${comment}`)
  }


  return (
    <div className=" relative create-comment-div">
      <form onSubmit={handleSubmit}>
        <button
          className=" absolute text-red-400 text-xs -bottom-24 right-20 md:-bottom-24 md:right-32 font-semibold -z-30"
          type="submit"
        >
          DELETE
        </button>
      </form>
    </div>
  )
}
