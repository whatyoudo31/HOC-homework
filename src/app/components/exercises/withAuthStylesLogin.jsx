import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withAuthStylesLogin = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState();

    const onLogin = () => {
        localStorage.setItem("user", "true");
        setIsAuth(localStorage.getItem("user"));
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(localStorage.getItem("user"));
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withAuthStylesLogin;
