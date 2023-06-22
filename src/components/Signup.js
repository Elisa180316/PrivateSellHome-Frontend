import React, { useState } from "react";
import "../styles/signup.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

//States//
const [state, setState] = useState({})
const [photo, setPhoto] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()

const handleState = (e) => {
    setState (prev => {
        return {prev, [e.target.name]:e.target.value}
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        let filename = null
        if (photo) {
            const formData = new FormData()
            filename = crypto.randomUUID() + photo.name
            formData.append ("filename", filename)
            formData.append ("image", photo)
            await request ('/upload/image', "POST", {}, formData, true)
        } else {
            return
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const data = await request ('/auth/register', "POST", headers, {...state, profileImg:filename})
        console.log(data)
        dispatch(register(data))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

// Form register
const Signup = () => {
  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleState} type="text" name="username" placeholder="Your username here" />
        <input onChange={handleState} type="email" name="email" placeholder="Your email here" />
        <label htmlFor="photo">
          Upload Photo <AiOutlineFileImage />
        </label>
        <input onChange={(e) => setPhoto(e.target.file[0])} id="photo" type="file" style={{ display: "none" }} />
        <input onChange={handleState} type="password" name="password" placeholder="You password here">
          Password
        </input>
        <button type="submit" Register></button>
        <p>
          Already have an account? <Link to="/signin"> Login </Link>
        </p>
      </form>
    </Container>
  );
};

export default Signup;
