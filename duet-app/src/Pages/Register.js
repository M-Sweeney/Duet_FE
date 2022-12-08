import { useState } from "react"
import { RegisterUser } from "../Services/Auth"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    })

    setFormValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })

    navigate("/signin")
  }

  return (
    <div className="registerPage">
      <div className="grid grid-cols-2 signin col">
        <div className="text-left slogan">
          <h1>DUET </h1>
          <h1>It Takes Two To Duet</h1>
        </div>
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label className="font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="registerInput"
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Smith"
                value={formValues.name}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="registerInput"
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
                className="registerInput"
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="font-semibold" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="registerInput"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <button
              className="mt-5 text-2xl font-semibold signinButton"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register