import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const naviagte = useNavigate();

  const onLogin = () => {
    login('Waito');
    naviagte('/', {
      replace: true,
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary"
        onClick={onLogin}
      >

        Login
      </button>
    </div>
  )
}
