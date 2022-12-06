import React from "react"
import axios from "axios"
import { useState } from "react"

export default function DeleteComment({ user }) {
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(content)

    await axios
      .delete(`http://localhost:3001/comments/${user.id}`, content)
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
    window.location.reload()
  }

  const deleteComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
      await Comment.destroy({ where: { id: commentId } })
      res.send({ message: `Deleted comment with an id of ${commentId}` })
    } catch (error) {
      throw error
    }
  }

  return (
    <div className=" relative create-comment-div">
      <form onSubmit={handleSubmit}>
        <input
          className=" w-10/12 h-24 create-comment-input"
          id="content"
          type="text"
          placeholder="WHAT'S ON YOUR MIND"
          onChange={handleChange}
          value={content[""]}
        />
        <button
          className=" absolute bottom-0 right-36 font-semibold"
          type="submit"
        >
          DELETE
        </button>
      </form>
    </div>
  )
}

//////
