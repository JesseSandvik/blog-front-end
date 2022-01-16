import { useDispatch } from "react-redux";
import { logout } from "../../features/user";

const LogoutButton = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        setIsLoggedIn(false);
    }

    return <button onClick={logoutHandler}>Logout</button>
}

export default LogoutButton;