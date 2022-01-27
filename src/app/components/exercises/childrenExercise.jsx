import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsWithNumber = ({ children }) => {
    return React.Children.map(children, (child, n) => {
        const config = {
            ...child.props
        };
        React.cloneElement(child, config);
        console.log("children", child);
        return (
            <>
                {n + 1}
                {React.cloneElement(child, config)}
            </>
        );
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsWithNumber>
                <Component />
                <Component />
                <Component />
            </ComponentsWithNumber>
        </CollapseWrapper>
    );
};

ComponentsWithNumber.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.oneOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
