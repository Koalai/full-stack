import { useState } from "react"

export const Main = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({ email: "",password:"", confirmPassword: ""})

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    const newErrors = { email: "", confirmPassword: "" }

    if (!validateEmail(email)) {
      newErrors.email = "Email is invalid."
      valid = false
    } else if (email.trim() === "") {
      newErrors.email = "Email is required.";
      valid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required.";
      valid = false;
    }


    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Password didn't match."
      valid = false
    } else if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required.";
      valid = false;
    }

    setErrors(newErrors)

    if (valid) {
      console.log("Form is valid!")
    }
  }

  return (
    <div className="text-xl">
      <div className="pl-20 pb-8 pr-72 pt-36 ">
        <p>
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams. Sign up{" "}
          <span className="italic">now</span> to get started.
        </p>
        <p className="mt-8">
          You <span>know</span> you want to.
        </p>
      </div>

      <div className="bg-stone-100 w-full pl-20 pt-4">
        <h2 className="text-2xl">Let&apos;s do this!</h2>
        <form
          
          className="grid grid-cols-2 gap-4 text-sm mt-8 pb-8 w-3/4"
        >
          <div>
            <label>FIRST NAME </label>
            <input type="text" className="input-custom" />
          </div>
          <div>
            <label>LAST NAME</label>
            <input type="text" className="input-custom" />
            
          </div>
          <div>
            <label>EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`input-custom ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
            { errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label>PHONE NUMBER</label>
            <input type="tel" className="input-custom" />
          </div>
          <div>
            <label>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-custom"
              required
            />
             { errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
          </div>
          <div>
            <label>CONFIRM PASSWORD</label>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`input-custom ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>
        </form>
      </div>

      <div className="pl-20 mt-8 flex flex-col gap-4 w-2/4">
          <button onClick={handleSubmit} className="bg-green-800 px-2 py-2 w-2/5 font-semibold rounded-md text-white">Create Account</button>
          <p>Already have account? <span className="font-semibold">Log in</span></p>
        </div>
    </div>
  )
}
