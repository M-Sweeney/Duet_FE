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
      <div className=" -mt-24 signin flex h-screen justify-center items-center">
        <div className="text-left text-3xl md:text-5xl ml-5 md:ml-20 md:mr-20 mr-0 mb-10 slogan">
          <h1 className="font-bold">DUET </h1>
          <h1 className=" font-light ">Harmonize Your Heart</h1>
        </div>
        <div className="card-overlay float-right mr-5 md:mr-36">
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
            SIGN IN
          </button>
        </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignIn




