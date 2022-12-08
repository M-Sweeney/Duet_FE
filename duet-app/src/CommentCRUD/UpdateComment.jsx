import React from "react"
import axios from "axios"
import { useState } from "react"

export default function UpdateComment({
  pops,
  setIsToggledEdit,
  isToggledEdit,
}) {
  const [content, setContent] = useState({
    content: "",
  })

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsToggledEdit(!isToggledEdit)

    await axios
      .put(`http://localhost:3001/comments/${pops.id}`, content)
  }

  return (
    <div className=" relative edit-comment-div">
      <form onSubmit={handleSubmit}>
        <input
          className=" absolute right-28 -bottom-24  w-9/12 h-24  edit-comment-input"
          id="content"
          type="text"
          placeholder={pops.content}
          autoComplete="off"
          onChange={handleChange}
          value={content[""]}
        />
        <button
          className=" absolute -bottom-16 right-10 text-base md:-bottom-16 md:right-36 md:text-base font-semibold"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}