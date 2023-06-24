import { ThemeContext } from "./context/ThemeContext";

const Consumer = (props) => {
    return (
        <ThemeContext.Consumer>
            {() => {
                <p>{props.children}</p>
            }}
        </ThemeContext.Consumer>
    )
}

export default Consumer;