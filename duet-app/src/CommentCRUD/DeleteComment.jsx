import React from "react"
import axios from "axios"
import { useState } from "react"
// import { useParams } from "react-router-dom"

export default function DeleteComment({ commentId }) {
  const [content, setContent] = useState("")
  // let { id } = useParams()

  // const handleChange = (e) => {
  //   setContent({ ...content, [e.target.id]: e.target.value })
  //   console.log(user)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(commentId)

    //NEED TO FIGURE out how to called the COMMENT ID
    await axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => {
        // console.log(res)
        // console.log(res.data)
      })
    window.location.reload()
  }

  return (
    <div className=" relative create-comment-div">
      <form onSubmit={handleSubmit}>
        <button
          className=" absolute text-red-400 text-xs -bottom-24 right-20 md:-bottom-20 md:right-32 font-semibold"
          type="submit"
        >
          DELETE
        </button>
      </form>
    </div>
  )
}
