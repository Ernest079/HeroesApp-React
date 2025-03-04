import { useNavigate } from "react-router"

export const LoginPage = () => {
  const naviagte = useNavigate();

  const onLogin = () => {
    naviagte('/', {
      replace: true,
    });
  }

  return (
    <div className="container mt-5">
      <hr />

      <button className="btn btn-primary"
        onClick={onLogin}
      >

        Login
      </button>
    </div>
  )
}
