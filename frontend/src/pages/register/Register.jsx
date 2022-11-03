import "./register.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SignUpInfo from "../register/SignUpInfo";
import PersonalInfo from "../register/PersonalInfo";
import OtherInfo from "../register/OtherInfo";
import AccountType from "../register/AccountType";

const Register = () => {
  const [page, setPage] = useState(0);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    telephone: "",
    currentJob: "",
    experience: "",
    city: "",
    charges: "",
    accountType: "",
    clientStructure: "",
    industryStructure: "",
  });

  const FormTitles = ["Créer un compte WorkTextile", "Type de Compte", "Informations sur votre : Profil", "Informations sur votre : Savoir-faire"];

  const ButtonText = () => {
    if ( page === 0 ) {
      return "Validez votre inscription";
    } else if (page === FormTitles.length - 1) {
      return "Finaliser mon inscription";
    } else {
      return "Continuer";
    }
  }
 
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs( (prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch(err) {
      setErr(err.response.data);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={handleChange}  />;
    } else if (page === 1) {
      return <AccountType formData={handleChange}/>;
    } else if (page === 1) {
      return <PersonalInfo formData={handleChange}   />;
    } else {
      return <OtherInfo formData={handleChange} />;
    }
  };

  return (
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Work Textile.</h1>
            <p>
              La primiere plateforme qui regroupe tous les acteurs de la production textile!
            </p>
            <span> as tu déja un compte ?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <div className="form">
             <h1>{FormTitles[page]}</h1>
              {PageDisplay()}
              {err && err}
              <div class="btn-group">
                <button 
                  hidden={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                    }}
                 >
                    Retour
                  </button>

                <button onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(inputs);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
                >
                  {ButtonText()}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
