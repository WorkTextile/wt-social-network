import React, {useState, useEffect} from 'react'
import { useMutation} from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import "./signUpPage.scss";
import axios from 'axios';

const SignUpPage = ({ goToNext, onboardingData, setOnboardingData }) => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
/*
  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (!emailRegex.test(onboardingData.email)) {
      setErrorMessage("It should be a valid email address!")
    } else if (!passwordRegex.test(onboardingData.password)) {
      setErrorMessage("Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!")
    } else if (onboardingData.password !== onboardingData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
    } else {
      setErrorMessage("");
    }
  }, [onboardingData])
*/

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/register")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  
  console.log(err)
  
  return (
    <div className='page-container'>
      
      <form className="content-container">
        <h1>Créer un compte WorkTextile</h1>
        <p>Indiquez vos identifiants de connexion</p>
        <hr />
       
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
        <br />
        {err && err}
        <button onClick={handleClick}>Register</button>

      </form>
    </div>
  )
}

export default SignUpPage;
