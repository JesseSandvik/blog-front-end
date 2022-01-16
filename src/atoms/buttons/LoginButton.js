import { useDispatch } from "react-redux";
import { login } from "../../features/user";

const LoginButton = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(login({ name: "Jesse Sandvik", age: 32, email: "sandvikjesse@gmail.com" }))}>Login</button>
}

export default LoginButton;