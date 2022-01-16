import { useSelector } from "react-redux";

const MainPageBody = () => {
    const user = useSelector((state) => state.user.value);

    return (
        <section>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </section>
    );
}

export default MainPageBody;