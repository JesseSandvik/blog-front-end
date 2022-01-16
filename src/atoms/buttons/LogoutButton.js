import { useDispatch } from "react-redux";
import { logout } from "../../features/user";

const LogoutButton = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(logout())}>Logout</button>
}

export default LogoutButton;