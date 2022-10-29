import "./login.scss"
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Work Textile.</h1>
            <p>
              Qui sommes-nous ?
              Une agence de production textile
              Avec WORKTEXTILE, réduisez vos coûts de production 
              et simplifiez votre chaîne d’approvisionnement en limitant les intermédiaires !
            </p>
            <span>Don't you have an account ?</span>
            <Link to ="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login;
