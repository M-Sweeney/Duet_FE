import React from "react"
import axios from "axios"
import { useState } from "react"

export default function UpdateComment({
  user,
  pops,
  setIsToggledEdit,
  isToggledEdit,
}) {
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
    <div className=" relative edit-comment-div">
      <form onSubmit={handleSubmit}>
        <input
          className=" absolute right-0 -bottom-16  w-10/12 h-16  edit-comment-input"
          id="content"
          type="text"
          placeholder={pops.content}
          autoComplete="off"
          onChange={handleChange}
          value={content[""]}
        />
        <button
          className=" absolute -bottom-16 right-10 text-base md:-bottom-16 md:right-10 md:text-base font-semibold"
          type="submit"
          onClick={() => setIsToggledEdit(!isToggledEdit)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
