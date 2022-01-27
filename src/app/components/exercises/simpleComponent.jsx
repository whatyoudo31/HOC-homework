import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;

// Вам необходимо HOC, который модицифицует компонент SimpleComponent следующим образом:

// Добавляет обертку в виде карточки boostrap (использовать существующий HOC)
// Передает параметр isAuth, который является результатом проверки наличия записи с названием user в localStorage
