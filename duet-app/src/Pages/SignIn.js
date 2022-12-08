import { useState } from "react"
import { SignInUser } from "../Services/Auth"
import { useNavigate } from "react-router-dom"

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: "", password: "" })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate("/conversations")
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="siginInput"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="siginInput"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="mt-5 text-2xl font-semibold signinButton"
            disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn