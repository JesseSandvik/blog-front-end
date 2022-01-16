import { useDispatch } from "react-redux";
import { login } from "../../features/user";

const LoginButton = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(login({ name: "Jesse Sandvik", age: "32", email: "sandvikjesse@gmail.com"}));
        setIsLoggedIn(true);
    }

    return <button onClick={loginHandler}>Login</button>
}

export default LoginButton;